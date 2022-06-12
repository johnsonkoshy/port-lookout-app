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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const services = new API();


export default function NewUpdate({portid, afterCreate}){
    const [attachedFilesChips, setAttachedFilesChips] = React.useState("")
    const [formInput, setFormInput] = React.useState({});
    const [attachments,setAttachments] = React.useState()
    const [isTemplate, setIsTemplate] = React.useState(false)

    const [templateTo,setTemplateTo]= React.useState("")

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
    const onToggleTemplate = (e)=>{
        setIsTemplate(e.target.checked)
    }
    const onChangeTemplate = (e)=>{
        setTemplateTo("helloo world")
    }
    React.useEffect(()=>{
        if(isTemplate){

        }
    },[isTemplate])
    return(
        <Box sx={{...style}}>
            <Typography  variant="h6" sx={{mb:1, mt:1}}>Create a new update</Typography>
            
            <Card>
                <CardContent>
                    <FormControl  sx={{ mb: 1, minWidth: 120 }} fullWidth>
                        <InputLabel htmlFor="grouped-select">Template</InputLabel>
                        <Select onChange={onChangeTemplate} defaultValue="" id="grouped-select" label="Grouping">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                       
                        <MenuItem value={1}>Template 1</MenuItem>
                        <MenuItem value={2}>Template 2</MenuItem>
                        
                        <MenuItem value={3}>Template 3</MenuItem>
                        <MenuItem value={4}>Template 4</MenuItem>
                        </Select>
                    </FormControl>
                    <Divider sx={{mb:2,mt:1}}/>
                    
                    {
                        isTemplate 
                        ?
                        <TextField
                            id="outlined-multiline-static"
                            label={ "Template Name"}
                            onChange={e=>{handleInput(e); setTemplateTo(e.target.value)}}
                            name={ "templateName" }
                            sx={{mb:1}}
                            fullWidth
                            value={templateTo}
                        />
                        :
                        <TextField
                            id="outlined-multiline-static"
                            label={"To"}
                            onChange={e=>{handleInput(e); setTemplateTo(e.target.value)}}
                            name={"to"}
                            sx={{mb:1}}
                            fullWidth
                            value={templateTo}
                        />
                    }
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

                    
                    <FormGroup>
                        <FormControlLabel control={<Checkbox  onChange={onToggleTemplate}/>} label="Save as template" />
                        
                    </FormGroup>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{mr:1}} onClick={onSave}>{isTemplate ? "Save as template": "Send Update" }</Button>
                    { !isTemplate && 
                        <>
                            <Button variant="outlined" component="label"  >
                                {" "}
                                <AddIcon /> Upload
                                <input type="file" onChange={onAddFile} hidden multiple/>
                            </Button>
                            <Stack direction="row" spacing={1} sx={{ml:1, mr:1}}>
                                {attachedFilesChips}
                            </Stack>
                        </>
                    }
                    
                    <Divider orientation="vertical" flexItem sx={{ml:1, mr:1}}/>
                    <Button variant="outlined" color="error" onClick={afterCreate}>Cancel</Button>
                </CardActions>
            </Card>

        </Box>
    )
}