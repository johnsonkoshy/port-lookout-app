import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import File from "./File";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import LinearProgress from '@mui/material/LinearProgress';

export default function TemporaryFolder({name}){
    return(

        <Box sx={{ m: 1, mb: 2, }}>
            
            <Card>
                <CardContent>
                    {name}
                </CardContent>
            </Card>
            
        </Box>
    )
}




{/* <Stack spacing={2} direction="row">
        {
        folders.prefixes.map(folder => {
            const { name, fullPath } = folder;
            return (
            <Button variant="contained" onClick={_=>openFolder(fullPath)} key={name} sx={{textTransform: "unset" }}>
            < FolderIcon sx={{mr:1}}/> {name}
            </Button>
        )
        })
        }
        
    </Stack> */}