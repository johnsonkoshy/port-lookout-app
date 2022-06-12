import React from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";

const AddTodo = React.memo(
  ({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => (
    <Paper elevation={0} style={{ display:'flex', margin: 1, padding: 1 }}>
      <TextField
            placeholder="Add Todo..."
            value={inputValue}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
            fullWidth
            variant="standard"
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
