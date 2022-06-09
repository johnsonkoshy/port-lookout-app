import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import API from "../services/API"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const services = new API();
export default function Create({closeFn}){
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "80%",
        bgcolor: "background.paper",
    
        boxShadow: 24,
        p: 4
    };
    const [formInput, setFormInput] = React.useState({});
 
    const handleSubmit = (e)=> {
       
        
        (async ()=>{
            const response = await services.createPortCall(formInput);
            await closeFn(true);
        })()
    }
    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput(prev => ({...prev, [name]: newValue }));
    };

    return (
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: '0.5%', width: "24%" },
            ...style
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
            <Typography variant="h5">Create New Port Call Form</Typography>
            <Divider  sx={{mb:1,mt:1}}/>
            <Card sx={{mb:1}}>
              <CardContent>
                <Typography variant="h6">Section A</Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Assigned To"
                  name='assignedto'
                  onChange={handleInput}
                />
                <TextField
                  label="Vessel Name"
                  onChange={handleInput}
                  name='vesselName'
                />
                <TextField
                  onChange={handleInput}
                  label="Vessel Type"
                  name='vesselType'
                />
                <TextField
                  onChange={handleInput}
                  label="Manager"
                  name='manager'

                />
              </CardContent>
            </Card>
            <Card sx={{mb:1}}>
              <CardContent>
                <Typography variant="h6">Section B</Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Berth"
                  name='berth'
                  onChange={handleInput}
                />
                <TextField
                  label="Port"
                  onChange={handleInput}
                  name='port'
                />
                <TextField
                  onChange={handleInput}
                  label="Charterer"
                  name='charterer'
                />
                
              </CardContent>
            </Card>
            <Card sx={{mb:1}}>
              <CardContent>
                <Typography variant="h6">Section C</Typography>
                <TextField
                  onChange={handleInput}
                  type="datetime-local"
                  label="ETA"
                  name='eta'
                  InputLabelProps={{
                    shrink: true
                  }}

                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="ETB"
                  name='etb'
                  type="datetime-local"
                  onChange={handleInput}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  label="ETC"
                  onChange={handleInput}
                  name='etc'
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  onChange={handleInput}
                  label="ETD"
                  name='etd'
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  onChange={handleInput}
                  label="Agent"
                  name='agent'

                />
               <TextField
                  onChange={handleInput}
                  label="Cargo"
                  name='cargo'

                />
              </CardContent>
            </Card>
        <Button variant="contained" onClick={handleSubmit}>Create & Close</Button>
        </Box>
      );
}