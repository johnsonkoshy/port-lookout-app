import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';




   
// (header1, content1), (header2, content2), (header, content1), (header1, content1)

export default function SmallPortInfo() {

    const oneCard = () =>  
        <Box sx={{ m: 1, mb: 2, }}>
            
            <Card sx={{height:'25vw', maxHeight: '100%', overflow: 'auto'}}>
            <Box sx={{   justifyContent:"center", alignItems:"center", mt: 2}}>
                <CardContent >
                  <List>
                     <Typography style={{ fontWeight: 600 }}>Notes: </Typography>
                    <ListItem>
                          <ListItemText sx={{ display: 'list-item' }}>Weather:
                            No fog occurred overnight. Little to no fog expected today and overnight.
                            Some rain occurred overnight. Some rain expected today and overnight.</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText>USDA/NCB inspections arranged after Captain’s confirmation of hold readiness</ListItemText>
                      </ListItem>
                  </List>

                </CardContent>
                <CardContent>
                    <List >
                    <Typography style={{ fontWeight: 600 }}>Links: </Typography>
                        <ListItem sx={{ display: 'list-item' }}>https://tidesandcurrents.noaa.gov/map/index.html</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>https://geospatial-usace.opendata.arcgis.com/datasets/349ce90ebfcd47f49401ac4d817b0d58_2/explore?filters=eyJTVEFURV9QT1NUIjpbIkxBIl0sIlBPUlRfTkFNRSI6WyJOZXcgT3JsZWFucywgTEEiLCJTb3V0aCBMb3Vpc2lhbmEsIExBLCBQb3J0IG9mIiwiQmF0b24gUm91Z2UsIExBIl19&location=29.875358%2C-89.963165%2C11.93</ListItem>
                    </List>

                </CardContent>
             </Box>
                
            </Card>
            
        </Box>;
    
    
  return (
    <Grid container>
        <Grid item xs = {12} >
            { oneCard() }
        </Grid>
      </Grid>
  );
}