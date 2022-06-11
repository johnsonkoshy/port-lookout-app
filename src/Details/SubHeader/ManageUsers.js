import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";



export default function ManageUsers() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll',
  };

  const columnsone = [
    { field: 'id', headerName: 'User', width: 170 },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'permission', headerName: 'Permission', width: 170 },
    { field: 'lastlogin', headerName: 'Last Login', width: 170 },
    { field: 'action', headerName: 'Action', width: 170 },
    { field: 'invitation', headerName: 'Invite', width: 170 },
  ];
    
  const rowsone = [
    {id: 'McMurray Bonnie', email: 'Gourav', permission: 'owner', lastlogin: 'a year ago', invitation: 'Accepted' },
    {id: 'Gideon, Grey', email: 12, permission: 'owner', lastlogin: 'a year ago' , invitation: 'Accepted'},
    {id: 'Braddock, Betsy', email: 43, permission: 'instructor', lastlogin: 'a year ago' , invitation: 'Accepted'},
    {id: 'Matt, Murdock', email: 41, permission: 'reviewer', lastlogin: '2 months ago' , invitation: 'Accepted'},
    {id: 'Blaire, Alison', email: 34, permission: 'presenter', lastlogin: '2 months ago' , invitation: 'Accepted'},
    {id: 'McCoy, Hank', email: 73, permission: 'presenter', lastlogin: '4 months ago' , invitation: 'Pending'},
    {id: 'Summers, Scott', email: 61, permission: 'presenter', lastlogin: 'a year ago' , invitation: 'Pending'},
  ];



  
  
  return (
    <Box sx={style}>
      <Box sx={{ display: "flex", mb:2  ,}}>
        <Typography id="modal-modal-title" variant="h4"  >
          Users
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button variant = "outlined" >
              Invite Users
        </Button>
      </Box>
      <DataGrid 
        sx={{
          height:'calc(98% - 50px)',
        }}
        rows={rowsone}
        columns={columnsone}
        pageSize = {10}
      />
      
    </Box>
  );
}
