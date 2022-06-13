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
    {id: 'McMurray Bonnie', email: 'Gourav', permission: 'owner', lastlogin: 'a year ago' },
    {id: 'Gideon, Grey', email: 12, permission: 'owner', lastlogin: 'a year ago' },
    {id: 'Braddock, Betsy', email: 43, permission: 'instructor', lastlogin: 'a year ago' },
    {id: 'Matt, Murdock', email: 41, permission: 'reviewer', lastlogin: '2 months ago' },
    {id: 'Blaire, Alison', email: 34, permission: 'presenter', lastlogin: '2 months ago' },
    {id: 'McCoy, Hank', email: 73, permission: 'presenter', lastlogin: '4 months ago' },
    {id: 'Summers, Scott', email: 61, permission: 'presenter', lastlogin: 'a year ago' },
  ];


  const columnstwo = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'name', headerName: 'NAME', width: 170 },
    { field: 'age', headerName: 'AGE', width: 170 },
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
    
  const rowstwo = [
    { id: 1, name: 'Gourav', age: 12 },
    { id: 2, name: 'Geek', age: 43 },
    { id: 3, name: 'Pranav', age: 41 },
    { id: 4, name: 'Abhay', age: 34 },
    { id: 5, name: 'Pranav', age: 73 },
    { id: 6, name: 'Disha', age: 61 },
    { id: 7, name: 'Raghav', age: 72 },
    { id: 8, name: 'Amit', age: 24 },
    { id: 9, name: 'Anuj', age: 48 },
  ];

  // const Button = styled.button`

  // `
  
  
  return (
    <Box sx={style}>
      {/* <Box sx={{display: "flex" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Users" value="1" />
              <Tab label="Settings" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button variant = "outlined" 
              onClick={handleClose}
              >
              Close</Button>
      </Box> */}

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

      <Box mt={3} mb={1}>
        <Typography variant="h5" component="h2" color="black">Pending invitations:</Typography>
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
        rows={rowstwo}
        columns={columnstwo}
      />
    </Box>
  );
}
