import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    minHeight: "50%",
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4
};





export default function InviteUsers() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [formInput, setFormInput] = React.useState({});

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput(prev => ({...prev, [name]: newValue }));
};



  return (
    <React.Fragment>
      <Button variant = "outlined" onClick={handleOpen}>+  Invite Users</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
        <Typography id= "modal-modal-title" variant = "h4" component = "h2" color = "black" sx={{mb:5}}>
          Invite New Users
        </Typography>
       
        <Grid container direction = "column" alignItems = "center" justifyContent = "center">
          <Card  sx={{mb:1, width: 800}}>
              <CardContent>
                
                <Box display = "flex">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Add People"
                  name='addpeople'
                  onChange={handleInput}
                  
                />
                <Box sx={{ flexGrow: 1 }}></Box>

                <Button variant = "contained" >+ Add</Button>
                </Box>
              </CardContent>
              
            </Card>
            <Button variant = "outlined" onClick={handleClose} sx={{mt:5}}>Close</Button>
            </Grid>

            
        </Box>
        
      </Modal>
    </React.Fragment>
  );
}
