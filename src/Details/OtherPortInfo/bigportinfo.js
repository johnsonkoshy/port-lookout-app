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


   
// (header1, content1), (header2, content2), (header, content1), (header1, content1)

export default function BigPortInfo({list1, list2, list3, list4}) {

    const oneCard = (list1) =>  
        <Box sx={{ m: 1, mb: 2, }}>
            
            <Card sx={{height:'25vw'}}>
            <Box sx={{ direction : "column", justifyContent:"center", alignItems:"center", mt: 2}}>
                <CardContent >
                    {list1[0]}
                </CardContent>
                <CardContent >
                    {list1[1]}
                </CardContent>
                <CardContent>
                    {list1[2]}
                </CardContent>
                <CardContent >
                    {list1[3]}
                </CardContent>
                </Box>
                
            </Card>
            
        </Box>;
    
    
  return (
    <Grid container>
        <Grid item xs = {3} >
            { oneCard(list1) }
        </Grid>
        <Grid item xs = {3}>
            { oneCard(list2) }
        </Grid>
        <Grid item xs = {3}>
            {oneCard(list3) }
        </Grid>
        <Grid item xs = {3}>
            {oneCard(list4) }
        </Grid>
      </Grid>
  );
}



