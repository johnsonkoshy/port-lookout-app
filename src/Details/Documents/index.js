import React from "react";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Explorer from "./Explorer";
import API from '../../services/API'

const services = new API();

export default function Documents({portid}) {
  const [folderData, setFolderData] = React.useState({});
  const [currentFolderPath, setCurrentFolderPath] = React.useState("");
  React.useEffect(()=>{
    (async ()=>{
      const url = await showDocumentFolders();
      
    })()
  },[])
  const showDocumentFolders = async (folderPath) => {
    const foldersRes = await services.getAllDocuments(portid, folderPath);
    setFolderData(foldersRes);
    setCurrentFolderPath(folderPath);
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar portid={portid} showDocumentFolders={showDocumentFolders} currentFolderPath={currentFolderPath}/>
      <Divider orientation="vertical" flexItem />
      <Explorer folders={folderData} showDocumentFolders={showDocumentFolders}/>
    </Box>
  );
}
