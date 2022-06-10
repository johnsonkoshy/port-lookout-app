import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
  } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, getDoc, deleteDoc, query, where  } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL,uploadBytes,listAll, uploadString, deleteObject} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";


const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY


const API = () =>{
    const firebaseConfig = {
        apiKey: FIREBASE_API_KEY,
        authDomain: "port-lookout-app-1.firebaseapp.com",
        projectId: "port-lookout-app-1",
        storageBucket: "port-lookout-app-1.appspot.com",
        messagingSenderId: "1026314452102",
        appId: "1:1026314452102:web:b42f5d07cabb928fb3a507",
        measurementId: "G-W8EQ76ML8Q"
    };
    const app = initializeApp(firebaseConfig);
    const appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(RECAPTCHA_KEY),
        isTokenAutoRefreshEnabled: true
    });
    const PORTCALLS_DB= "portcalls"
    
    const PORT_UPDATES_DB="port_updates";
    const PORT_UPDATES_FOLDER="updates";
    
    const PORT_DOCUMENTS_DB="port_documents";
    const PORT_DOCUMENTS_FOLDER="documents";
    return({
        signUp:async (email, password, firstName, lastName) => {
            let isSuccess=false;
            try{
              
                const auth = getAuth();
                const {user}= await createUserWithEmailAndPassword(auth, email, password)
                await updateProfile(user, {
                    displayName: firstName + " " + lastName
                  });
                
                if(user) isSuccess=true

                return {isSucces: isSuccess, user}
                  
            }catch(error) {
                console.log(error)
                return {isSucces: isSuccess, error}
            }
        },
        login:async(email, password)=>{
            let isSuccess=false;
            try{
                const auth = getAuth();
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                if(user) isSuccess = true;
                return{isSuccess, user}
                 
            }catch(error){
                return{isSuccess, error}
            }
        },
        getPortCalls:async () =>{
            const db = getFirestore(app);
            const portcallsCol = collection(db, PORTCALLS_DB);
            const portcallSnapshot = await getDocs(portcallsCol);
            const portcallList = portcallSnapshot.docs.map(doc => ({...doc.data(), id:doc.id}));
            return portcallList;
        },
        getPortCallDetails:async(portid)=>{
            const db = getFirestore(app);
            const portcallsCol = collection(db, PORTCALLS_DB);
            const portcallDetailsRef = doc(portcallsCol,portid)
            const portcallDetailsData = await getDoc(portcallDetailsRef)
            return {...portcallDetailsData.data(),id:portcallDetailsData.id};
        },
        createPortCall:async (data)=>{
            const db = getFirestore(app);
            const portcallsCol = collection(db, PORTCALLS_DB);
            const response = await addDoc(portcallsCol, data)
            return response;
        },
        deletePortCall:async (portid) =>{
            const db = getFirestore(app);
            const portcallsCol = collection(db, PORTCALLS_DB);
            const portcallDetailsRef = doc(portcallsCol,portid)
            const portcallDetailsData = await deleteDoc(portcallDetailsRef)
            return portcallDetailsData
        },
        createPortUpdates:async (updateData, files)=>{
            const db = getFirestore(app);
            const port_updates_col = collection(db, PORT_UPDATES_DB);
            const response = await addDoc(port_updates_col, updateData)

            const createPortUpdateAttachments= async (updates_id, portid, files) =>{
                if(!(files && files.length>0))return false;
                const storage = getStorage(app);
                files.map(async file => {
                    const storeageFileRef = ref(storage, `${PORT_UPDATES_FOLDER}/${portid}/${updates_id}/${file.name}`);
                    await uploadBytes(storeageFileRef, file)
                })
                
                
            }

            await createPortUpdateAttachments(response.id, updateData.portid, files)
            return response;
        },
        getPortUpdates:async (portid)=>{
            const db = getFirestore(app);
            const port_updates_col = collection(db, PORT_UPDATES_DB);


            const q = query(port_updates_col, where("portid", "==", portid));
            const update_response = await getDocs(q)
            const update_list = update_response.docs.map(doc => ({...doc.data(), id:doc.id}));
            return update_list;
        },
        getPortUpdateFiles: async (portid, update_id) =>{
            const storage = getStorage(app);
            const pathReference = ref(storage, `${PORT_UPDATES_FOLDER}/${portid}/${update_id}`);
            const {items} = await listAll(pathReference)
            
            if(items && items.length){
                for(let i = 0; i<items.length; i++){
                    const url =await getDownloadURL(ref(items[i].storage, items[i].fullPath));
                    items[i].url = url;
                    
                }
                
            }
            
            return items;
        },
        createPortDocumentFolder:async (folderName, portid,folderPath)=>{
            const db = getFirestore(app);
            const storage = getStorage(app);
            const placeholderFile = '_ignore';
            let requestFolder = folderPath ? folderPath : `${PORT_DOCUMENTS_FOLDER}/${portid}`;
            requestFolder = `${requestFolder}/${folderName}/${placeholderFile}`;

            const storeageFolderRef = ref(storage, requestFolder);
            
            const didCreateFolder= await uploadString(storeageFolderRef, placeholderFile)
            //const {ref,...result} = didCreateFolder;
            //await deleteObject(ref)



           
        },
        getAllDocuments:async (portid, folderPath='')=>{

            const db = getFirestore(app);
            const storage = getStorage(app);
            const requestFolder = folderPath ? folderPath : `${PORT_DOCUMENTS_FOLDER}/${portid}`;
            const pathReference = ref(storage, requestFolder);
            const folderItems = await listAll(pathReference)
            
            return folderItems;
        }
    })
}

export default API;