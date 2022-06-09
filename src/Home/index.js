import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import port_data from "./port_data";
import columns from "./columns";
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Create from './Create';
import API from '../services/API';
import DeleteIcon from '@mui/icons-material/Delete';

const services = new API();
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onDelete = async (portid) => {
    await services.deletePortCall(portid)
    await getUpdatePortCall()
  }
  const additionColumn=[
    {
      field: "deleteBtn",
      headerName: "Delete",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 90,
      editable: false,
      renderCell: ({ row, value, hasFocus }) => {
        return (
          <IconButton onClick={_=>onDelete(row.id)} children={<DeleteIcon sx={{color:'error.main'}}/>}/>
        );
      }
    },
  ]
  let columnSet= [...columns, ...additionColumn]
  const [portcallList,setPortCallList] = React.useState([]);
  const closeFn = async (shouldClose)=>{
    shouldClose && setOpen(false)
    await getUpdatePortCall()
  }
  
  const getUpdatePortCall = async ()=>{
    const portcallListRes = await services.getPortCalls()
    // setPortCallList(prev => ([...portcallListRes, ...prev]))
    setPortCallList(portcallListRes)
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
        <Button onClick={()=>setOpen(true)} 
          variant="contained" 
          sx={{
            mr:1, 
            backgroundColor:'primary.main',
            '&:hover':{
              backgroundColor:'primary.light',
            }
          }}
        >
          <AddIcon />Create New
        </Button>
        <TextField  label="Search" id="search" />
      </Box>
      

      <DataGrid
        rows={portcallList}
        columns={columnSet}
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
