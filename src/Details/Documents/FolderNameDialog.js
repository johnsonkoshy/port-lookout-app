import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
import API from '../../services/API';
const services = new API();



export default function FolderName({portid, open, handleClose,createNewFolder}) {
  

  const [folderName,setFolderName] = React.useState('');
  const onCreateFolder = async () => {
    createNewFolder(folderName);
  }
    
  
  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Specify a folder name
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
                required
                id="outlined-required"
                defaultValue={"Port Name"}
                label="Folder Name"
                value={folderName}
                margin="normal"
                onChange={(e)=>setFolderName(e.target.value)}

                />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" >Cancel</Button>
          <Button onClick={onCreateFolder} autoFocus variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
