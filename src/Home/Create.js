import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Modal from "@mui/material/Modal";

export default function Create(){
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
    return(
        <Box sx={style}>
            test
        </Box>
    )
}