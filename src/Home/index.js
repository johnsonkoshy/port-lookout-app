import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import port_data from "./port_data";
import columns from "./columns";
import * as React from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore/lite';
const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY


export default function Home() {
  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: FIREBASE_API_KEY,
      authDomain: "port-lookout-app-1.firebaseapp.com",
      projectId: "port-lookout-app-1",
      storageBucket: "port-lookout-app-1.appspot.com",
      messagingSenderId: "1026314452102",
      appId: "1:1026314452102:web:b42f5d07cabb928fb3a507",
      measurementId: "G-W8EQ76ML8Q"
    };
    const app=initializeApp(firebaseConfig);
    const db = getFirestore(app);
    async function getPortCalls(db) {
      const portcallsCol = collection(db, 'portcalls');
      const portcallSnapshot = await getDocs(portcallsCol);
      const portcallList = portcallSnapshot.docs.map(doc => ({...doc.data(), id:doc.id}));
      return portcallList;
    }
     (async () => {
      const list = await getPortCalls(db)
      console.log("list: "+ list)
      const docRef = doc(db,'portcalls',list[1].id)
      await updateDoc(docRef, {
        updated: true
      });
      })();

  }, []);

  return (
    <Box sx={{ height: 700, m: 2 }}>
      <TextField fullWidth label="Search" id="search" />

      <DataGrid
        rows={port_data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ borderRadius: 0 }}
      />
    </Box>
  );
}
