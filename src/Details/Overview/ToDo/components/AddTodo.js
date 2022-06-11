import React from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";

const AddTodo = React.memo(
  ({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => (
    <Paper elevation={0} style={{ display:'flex', margin: 2, padding: 2 }}>
      <TextField
            placeholder="Add Todo here"
            value={inputValue}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
            fullWidth
          />
     <Button
            
           sx={{ml:1, p:0}}
            variant="contained"
            onClick={onButtonClick}
          >
            +
      </Button>
    </Paper>
  )
);

export default AddTodo;
