import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import port_data from "./port_data";
import columns from "./columns";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Modal from "@mui/material/Modal";
import Create from './Create';
import API from '../services/API';

const services = new API();
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [portcallList,setPortCallList] = React.useState(port_data);
  const closeFn = async (shouldClose)=>shouldClose && setOpen(false) && getUpdatePortCall()
  
  const getUpdatePortCall = async ()=>{
    const portcallListRes = await services.getPortCalls()
    setPortCallList(prev => ([...portcallListRes, ...prev]))
  }

  React.useEffect(() => {
    (async ()=>{
      await getUpdatePortCall();
    })()

  }, []);
  
  return (
    <Box sx={{ height: 700, m: 2 }}>
      <Box sx={{display:'flex', mb:1}}>

        <Box sx={{flexGrow:1}} />
        <Button onClick={()=>setOpen(true)} variant="contained" sx={{mr:1}}>
          <AddIcon />Create New
        </Button>
        <TextField  label="Search" id="search" />
      </Box>
      

      <DataGrid
        rows={portcallList}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ borderRadius: 0 }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Create closeFn={closeFn}/>
      </Modal>
    </Box>
  );
}
