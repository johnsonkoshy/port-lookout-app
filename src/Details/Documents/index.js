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
      const url = await showFolders();
      
    })()
  },[])
  const showFolders = async (folderPath, baseFolder, callBack) => {
    let foldersRes = await services.getAllDocuments(portid, folderPath, baseFolder);
    if (callBack) {
      foldersRes = await callBack(foldersRes);
    }
    
    setFolderData(foldersRes);
    setCurrentFolderPath(folderPath);
    
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar portid={portid} showFolders={showFolders} currentFolderPath={currentFolderPath}/>
      <Divider orientation="vertical" flexItem />
      <Explorer folders={folderData} showDocumentFolders={showFolders}/>
    </Box>
  );
}
