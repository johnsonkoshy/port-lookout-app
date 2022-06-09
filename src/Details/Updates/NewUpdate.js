import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import API from "../../services/API"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';

const services = new API();


export default function NewUpdate({portid, afterCreate}){
    const [attachedFilesChips, setAttachedFilesChips] = React.useState("")
    const [formInput, setFormInput] = React.useState({});
    const [attachments,setAttachments] = React.useState()

    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput(prev => ({...prev, [name]: newValue }));
    };
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
    const Input = styled('input')({
        display: 'none',
    });

    const onSave = async (e)=>{
        const res = await services.createPortUpdates({...formInput, portid} , attachments)
        await afterCreate(res)
    }
    const onAddFile= (e)=>{
        const files = Array.from(e.target.files)
        setAttachedFilesChips(files.map(f=> <Chip label={f.name}  />))
        setAttachments(files)
    }
    return(
        <Box sx={{...style}}>
            <Typography>Create a new update</Typography>
            <Divider  sx={{mb:1,mt:1}}/>
            <Card>
                <CardContent>
                <TextField
                    id="outlined-multiline-static"
                    label="To"
                    onChange={handleInput}
                    name={"to"}
                    sx={{mb:1}}
                    fullWidth
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Subject"
                    onChange={handleInput}
                    name={"subject"}
                    sx={{mb:1}}
                    fullWidth
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Updates"
                    name={"updates"}
                    multiline
                    rows={4}
                    sx={{mb:1}}
                    onChange={handleInput}
                    fullWidth
                />
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{mr:1}} onClick={onSave}>Save & Send Update</Button>
                    <Button variant="outlined" component="label"  >
                        {" "}
                        <AddIcon /> Upload
                        <input type="file" onChange={onAddFile} hidden multiple/>
                    </Button>
                    <Stack direction="row" spacing={1} sx={{ml:1}}>
                        {attachedFilesChips}
                    </Stack>
                </CardActions>
            </Card>

        </Box>
    )
}