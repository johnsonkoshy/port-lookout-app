import React from "react";
import EmailList from "./EmailList";
import Box from "@mui/material/Box";
import EmailContent from "./EmailContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import NewUpdate from "./NewUpdate";

export default function Updates() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = ()=> setOpen(true)
  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>New Update</Button>
      <Box sx={{ display: "flex" }}>
        <EmailList />
        <Divider orientation="vertical" flexItem />
        <EmailContent />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewUpdate />
      </Modal>
    </Box>
  );
}
