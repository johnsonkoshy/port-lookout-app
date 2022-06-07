import React from "react";
import EmailList from "./EmailList";
import Box from "@mui/material/Box";
import EmailContent from "./EmailContent";
import Divider from "@mui/material/Divider";
export default function Updates() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <EmailList />
      <Divider orientation="vertical" flexItem />
      <EmailContent />
    </Box>
  );
}
