import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ManageUsers from "./ManageUsers";

export default function SubHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        variant="h4"
        noWrap
        sx={{
          mr: 1,
          fontWeight: 700,
          // letterSpacing: ".1rem",
          textDecoration: "none",
          color: "text.secondary"
        }}
      >
        Ship Name
      </Typography>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Button variant="contained" onClick={handleOpen}>
        Manage Users
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ManageUsers />
      </Modal>
    </Box>
  );
}
