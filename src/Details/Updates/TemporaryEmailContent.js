import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SingleEmail from "./SingleEmail";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";



export default function TemporaryEmailList(){
    
    return(
       <Stack sx={{ overflow: 'auto'}}>
           
            <Box sx={{backgroundColor : "gray", mt: 2, mb: 2}}>
                <Typography>Today</Typography>
            </Box>
           <SingleEmail></SingleEmail>
            <Box sx={{backgroundColor : "gray", mt: 2, mb: 2}}>
                <Typography>Wednesday</Typography>
            </Box>
            <SingleEmail></SingleEmail>
            <SingleEmail></SingleEmail>
            <Box sx={{backgroundColor : "gray", mt: 2, mb: 2}}>
                <Typography>Older</Typography>
            </Box>
            <SingleEmail></SingleEmail>
            
       </Stack>
    )

}