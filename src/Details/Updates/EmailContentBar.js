import React from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



export default function EmailContentBar() {
    return (
        <Grid container>
            <Grid item xs={4}>
             <Box>
                 <Button>
                <CheckBoxOutlineBlankIcon sx={{m: 1}}></CheckBoxOutlineBlankIcon>
                </Button>
                <Button>
                <ReplayIcon sx={{m: 1}}></ReplayIcon>
                </Button>
                <Button>
                <MoreVertIcon sx={{m: 1}}></MoreVertIcon>
                </Button>
                <Button>
                <AddCircleOutlineIcon sx={{m: 1}}></AddCircleOutlineIcon>
                </Button>
            </Box>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={2}>
                <Box>
                    <Button>Share</Button>
                    <Button >
                    <InfoIcon  sx={{m: 1}}></InfoIcon>
                    </Button>
                </Box>
            </Grid>
            

        </Grid>
   

    )


}