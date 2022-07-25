import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FileOpenIcon from '@mui/icons-material/FileOpen';


   
   

export default function TemporaryFile({file1, file2, file3, file4}) {
    const oneFile = (fileName) =>  
        <Box sx={{ m: 1, mb: 2, }}>
            
            <Card>
                <CardContent sx={{height:'15vw'}}>
                    <Box sx={{height:'100%', width:'100%', display:'flex', justifyContent:"center", alignItems:"center"}}>
                        {
                            fileName
                        }
                    </Box>
                </CardContent>
                <CardActions sx={{backgroundColor:'primary.main', height:'20'}}>
                    <Grid container justify="center">
                    <Button size="small" variant="a" sx={{ textTransform: "none",color:'primary.contrastText' }}>
                    
                        {fileName}
                       
                    </Button>
                    </Grid>
            </CardActions>
            </Card>
            
        </Box>;
    
  return (
    <Grid container>
        <Grid item xs = {3} >
            { oneFile(file1) }
        </Grid>
        <Grid item xs = {3}>
            { oneFile(file2) }
        </Grid>
        <Grid item xs = {3}>
            {oneFile(file3) }
        </Grid>
        <Grid item xs = {3}>
            {oneFile(file4) }
        </Grid>
      </Grid>
  );
}



