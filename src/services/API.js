import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
  } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, getDoc, deleteDoc } from 'firebase/firestore/lite';

import { initializeApp } from "firebase/app";
const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY


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
    const PORTCALLS_DB= "portcalls"
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
        }
    })
}

export default API;