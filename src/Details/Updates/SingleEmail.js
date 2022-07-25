import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EmailListBar from "./EmailListBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";


export default function SingleEmail(){
    
    return(
       <Stack>
           {/* <Typography></Typography> */}
        <Box sx={{ border: 1}}>
            <Box sx={{ m: 1}}>
            <Typography sx={{fontWeight : 600}}>Sender</Typography>
            <Typography>Re: Subject Line</Typography>
            <Typography>[Update Content Preview]</Typography>
            </Box>
        </Box>
       </Stack>
    )

}