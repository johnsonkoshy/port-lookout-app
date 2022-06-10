import React from "react";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Explorer from "./Explorer";
import API from '../../services/API'

const services = new API();

export default function Documents({portid}) {
  const [folders, setFolders] = React.useState([]);
  React.useEffect(()=>{
    (async ()=>{
      const url = await services.getPortUpdates('1234')
      console.log(url) 
    })()
  },[])
  const showDocumentFolders = async () => {
    const foldersRes = await services.getAllDocuments(portid)
    setFolders(foldersRes);
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar portid={portid} showDocumentFolders={showDocumentFolders}/>
      <Divider orientation="vertical" flexItem />
      <Explorer folders={folders}/>
    </Box>
  );
}
