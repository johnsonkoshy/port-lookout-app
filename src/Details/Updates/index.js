import React from "react";
import EmailList from "./EmailList";
import Box from "@mui/material/Box";
import EmailContent from "./EmailContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import NewUpdate from "./NewUpdate";
import API from "../../services/API"

const services = new API();

export default function Updates({portid}) {
  const [open, setOpen] = React.useState(false);
  const [updates, setUpdates] = React.useState([])
  const [openedEmail, setOpenedEmail] = React.useState({})

  const handleClose = () => setOpen(false);
  const handleOpen = ()=> setOpen(true)

  const afterCreate = async (responseResult)=>{
    setOpen(false);
    await hydrateEmailList();
    handleClose();
  }
  const hydrateEmailList = async()=>{
    const updatesRes = await services.getPortUpdates(portid);
    setUpdates(updatesRes)
  }

  const openEmail = (id)=>{
    setOpenedEmail(updates[id])
  }
  React.useEffect(()=>{
    (async ()=>{
      await hydrateEmailList()
    })()
  },[])

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>New Update</Button>
      <Box sx={{ display: "flex" }}>
        <EmailList emailList={updates} openEmail={openEmail}/>
        <Divider orientation="vertical" flexItem />
        <EmailContent emailData={openedEmail} portid={portid}/>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewUpdate portid={portid} afterCreate={afterCreate}/>
      </Modal>
    </Box>
  );
}
