import React from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";

const AddTodo = React.memo(
  ({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => (
    <Paper style={{ display:'flex', margin: 16, padding: 16 }}>
      <TextField
            placeholder="Add Todo here"
            value={inputValue}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
            fullWidth
          />
     <Button
            
           
            variant="outlined"
            onClick={onButtonClick}
          >
            +
      </Button>
    </Paper>
  )
);

export default AddTodo;
