import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import File from "./File";
import TemporaryFolder from "./TemporaryFolder";
import TemporaryFile from "./TemporaryFile";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

export default function Explorer({folders,showDocumentFolders, loading}) {
  const openFolder = async (folderPath, path) => {
   
    await showDocumentFolders(folderPath);
  }
  const navigateBreadcrumbs = async (folderName, path,crumbIdx) => {
    const pathArray =path.split("/")
    const homePathArray = pathArray.splice(0,2);
    const indexOfSecondSlash = homePathArray[0].length +1
    const homePathIdx = path.indexOf("/",indexOfSecondSlash)
    const homePath = path.substring(0,homePathIdx);
    if(folderName === "Home"){
      await showDocumentFolders(homePath);
    }else{
      if(!hasFolders) pathArray.pop();
      const folderPath=pathArray.reduce((acc,curr,idx)=>{
        if(idx >= crumbIdx) return acc;
        return acc+"/"+curr;
      }, "")
      await showDocumentFolders(homePath+folderPath);
    }
    
    
  }

  const convertToBreadcrumbs = (folders)=>{
    const folderPath = hasFolders ? folders.prefixes[0].fullPath : folders.items[0].fullPath;
    let currentFolderPathArray=folderPath.split("/").splice(2)
    //removing last item as its is the next folder
    currentFolderPathArray.pop()
    currentFolderPathArray=["Home",...currentFolderPathArray]
    return currentFolderPathArray.map((folderName,idx)=>{
      return <Link component="a" onClick={()=>navigateBreadcrumbs(folderName, folderPath,idx)}>{folderName}</Link>
    })

  }
  const hasFolders = folders && folders.prefixes && folders.prefixes.length > 0;
  const hasFiles = folders && folders.items && folders.items.length > 0;
  return (
    <Box
      sx={{
        width: 1,
        maxWidth: "100%",
        p: 1
      }}
    >
      

      {
        !folders.diableBreadcrumbs && (hasFolders || hasFiles) &&
        (
          <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ m: 1 }}>
            {
              convertToBreadcrumbs(folders)
            }
          </Breadcrumbs>
        )
      }
      <TextField fullWidth label="Search" id="fullWidth" sx={{ m: 1 }} />

      <Typography component="span" variant="header2" color="text.secondary" display="block" sx={{ ml: 1.5,  mt: 5, mb: 2 }}>
              Folders
      </Typography>
      <Grid container>
        <Grid item xs = {3}>
          <TemporaryFolder name="Clearance and Certificates"></TemporaryFolder>
        </Grid>
        <Grid item xs = {3}>
        <TemporaryFolder name="Notice of Readiness"></TemporaryFolder>
        </Grid>
        <Grid item xs = {3}>
          <TemporaryFolder name="Final Stow Plan"></TemporaryFolder>
        </Grid>
        <Grid item xs = {3}>
          <TemporaryFolder name="Cargo Manifest"></TemporaryFolder>
        </Grid>
      </Grid>

      <Typography component="span" variant="header2" color="text.secondary" display="block" sx={{ ml: 1.5,  mt: 5, mb: 2 }}>
            Files
      </Typography>
      <TemporaryFile file1 = "Vessel Registry" file2 = "International Tonnage Cart" file3 = "Loadline Cart" file4 = "Safety Equipment Cert"></TemporaryFile>
      <TemporaryFile file1 = "Cert of Financial Responsibility" file2 = "Us CBP Tonnage Report" file3 = "Last Port Clearance" file4 = "Mates Recipient"></TemporaryFile>
      <TemporaryFile file1 = "CBP Form 1304-Crews Effects List" file2 = "CBP Form I-148 Crew List (S/S)" file3 = "Attached Port Entrance" file4 = "Attached Port Clearance"></TemporaryFile>
      <TemporaryFile file1 = "Health Declaration" file2 = "Terminal Pre-Arrival" file3 = "Agent Pre-Arrival" file4 = "Copies of Regulating Reporting"></TemporaryFile>
      
      {
        folders && folders.prefixes && folders.prefixes.length > 0 &&
        (
          <Box sx={{ m: 1, mb: 2 }}>
            <Typography component="span" variant="body2" color="text.primary">
              Folders
            </Typography>
            <Stack spacing={2} direction="row">
              {
                folders.prefixes.map(folder => {
                  const { name, fullPath } = folder;
                  return (
                  <Button variant="contained" onClick={_=>openFolder(fullPath)} key={name} sx={{textTransform: "unset" }}>
                    < FolderIcon sx={{mr:1}}/> {name}
                  </Button>
                )
                })
              }
              
            </Stack>
          </Box>
        )
        
      }
      {
        folders && folders.items && folders.items.length > 0 &&
        (
          <Box sx={{ m: 1 }}>
            <Typography component="span" variant="body2" color="text.primary">
              Files
            </Typography>
            <Stack spacing={2} direction="row">
              {
                folders.items.map(file => {
                  const { name, downloadUrl, id } = file;
                  return (
                    <File key={id} name={name} downloadUrl={downloadUrl} />
                  )
                })
              }
              
            </Stack>
          </Box>
        )
      }
      
    </Box>
  );
}
