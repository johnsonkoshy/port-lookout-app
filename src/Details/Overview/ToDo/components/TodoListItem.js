import React from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  FormGroup,
  FormControlLabel
} from "@mui/material";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
  const TodoListItem = React.memo(
  ({ persontext, completetext, labeltext, divider, checked, onCheckBoxToggle, onButtonClick }) => 
  
 (
  

     
      <Grid mt={1} mb={1}>
         <Box sx={{border: 1, borderRadius: '10px', borderColor: 'grey.500'}}>
      {/* <ListItem divider={divider} sx={{p:0}}> */}
        {/* checkbox */}
        <Grid container >
          <Grid item xs={2} >
            <FormControlLabel control={<Checkbox onClick={onCheckBoxToggle} checked={checked}  disableRipple />} />
          </Grid>

          <Grid item xs={8}>
            <ListItemText primary = {labeltext}></ListItemText>
          </Grid>
            
         
              {/* trashcan */}
            <Grid item xs={1}>
              <IconButton aria-label="Delete Todo" onClick={onButtonClick} >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
         
            
        </Grid>

        <Grid container >
          <Grid item xs={2}></Grid>
          <Grid item xs = {5}>
          <ListItem>
            <ListAltIcon fontSize="small" color="action" ></ListAltIcon> 
            <ListItemText primary = {completetext} sx={{fontSize:'0.85em'}} disableTypography></ListItemText>
            </ListItem>
          </Grid>
          <Grid item xs={5}>
            <ListItem>
            <PersonIcon fontSize="small" color="action"></PersonIcon>
            <ListItemText  primary = {persontext} sx={{fontSize:'0.85em'}} disableTypography></ListItemText>
            </ListItem>
          </Grid>
          
        </Grid>
      {/* </ListItem> */}
      </Box>
      </Grid>
     

  )
);

export default TodoListItem;
