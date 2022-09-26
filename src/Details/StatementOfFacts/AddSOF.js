import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


 

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
};


export default function BasicGrid() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [formInput, setFormInput] = React.useState({});


  return (
    <React.Fragment>
    <IconButton sx={{ m: 1 }} onClick={handleOpen}>
      <AddCircleIcon></AddCircleIcon>
    </IconButton>
    <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
    <Box sx={ style }>
        <Typography sx={{fontWeight:"bolder"}}>Add an SOF</Typography>
        <Box sx={{ml:4, mr:4, mt:10}}>
      <Grid container sx={{mb:5}}>
        <Grid item xs={3}>
            
                <TextField
                required
                id="standard-basic"
                // sx={{ m: 9 }}
                variant = "standard"
                label="Date"
                defaultValue={""}
                
                sx={{width:"75%"}}
              />
           
        </Grid>
        <Grid item xs={3}>
       
              <TextField
                required
                id="standard-basic"
                // sx={{ m: 9 }}
                variant = "standard"
                label="Time"
                defaultValue={""}
                
                sx={{width:"75%"}}
              />
     
        </Grid>
        <Grid item xs={3}>
       
              <TextField
                required
                id="standard-basic"
                // sx={{ m: 9 }}
                variant = "standard"
                label="Starting Fuel"
                defaultValue={""}
                
                sx={{width:"75%"}}
              />
        
        </Grid>
        <Grid item xs={3}>
         
              <TextField
                required
                id="standard-basic"
                // sx={{ m: 9 }}
                variant = "standard"
                label="Ending Fuel"
                defaultValue={""}
                
                sx={{width:"75%"}}
              />
           
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
        
          <TextField
                required
                id="standard-basic"
                // sx={{ m: 9 }}
                variant = "standard"
                label="Activity"
                defaultValue={""}
                
                sx={{width:"75%"}}
              />

        </Grid>
        <Grid item xs={6}>
  
          <TextField
                required
                id="standard-basic"
                // sx={{ m: 9 }}
                variant = "standard"
                label="Comments"
                defaultValue={""}
                fullWidth
                sx={{width:"75%"}}
              />

        </Grid>
      </Grid>
      </Box>
      <Box sx={{height:"25%"}}></Box>
      <Box display="flex" justifyContent="flex-end">
        {/* <Box sx={{ flexGrow: 1 }}></Box> */}
            <Button onClick={handleClose} >Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
       
      </Box>
    </Box>
    </Modal>
    </React.Fragment>
  );
}