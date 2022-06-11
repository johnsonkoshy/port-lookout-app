import React from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@mui/material";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const TodoListItem = React.memo(
  ({ text, divider, checked, onCheckBoxToggle, onButtonClick }) => (
    <ListItem divider={divider} sx={{p:0}}>
      <Checkbox onClick={onCheckBoxToggle} checked={checked} disableRipple />
      <ListItemText primary={text} />
      <ListItemSecondaryAction sx={{right:0}}>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick} >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);

export default TodoListItem;
