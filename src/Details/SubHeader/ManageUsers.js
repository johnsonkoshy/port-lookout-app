import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';



export default function ManageUsers() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };


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
    { field: 'invitationstatus', headerName: 'Invitation Status', width: 170 },
    { field: 'action', 
      headerName: 'Action', 
      width: 170,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Edit
          </Button>
        );
      }
     },
  ];
    
  const rowsone = [
    {id: 'McMurray Bonnie', email: 'Gourav', permission: 'owner', lastlogin: 'a year ago', invitationstatus: 'PENDING' },
    {id: 'Gideon, Grey', email: 12, permission: 'owner', lastlogin: 'a year ago', invitationstatus: 'PENDING'  },
    {id: 'Braddock, Betsy', email: 43, permission: 'instructor', lastlogin: 'a year ago', invitationstatus: 'None'  },
    {id: 'Matt, Murdock', email: 41, permission: 'reviewer', lastlogin: '2 months ago', invitationstatus: 'None'  },
    {id: 'Blaire, Alison', email: 34, permission: 'presenter', lastlogin: '2 months ago', invitationstatus: 'PENDING'  },
    {id: 'McCoy, Hank', email: 73, permission: 'presenter', lastlogin: '4 months ago', invitationstatus: 'None'  },
  ];


  
  
  return (
    <Box sx={style}>
     

      <Box></Box>
      <Box sx={{ display: "flex" }} mt={2} mb={2}>
        <Typography id="modal-modal-title" variant="h4" component="h2" color="black">
          Manage Users
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button variant = "outlined" 
              onClick={() => {
                alert('clicked');
                  }}
              >
            +    Invite Users</Button>
      </Box>

      <Box mb={1}>
        <Typography variant="h5" component="h2" color="black">Shared with:</Typography>
      </Box>
      <DataGrid 
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          
        }}
        rows={rowsone}
        columns={columnsone}
        pageSize = {10}
      />

      
    </Box>
  );
}
