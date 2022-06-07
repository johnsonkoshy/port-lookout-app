import React from "react";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Explorer from "./Explorer";

export default function Documents() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Divider orientation="vertical" flexItem />
      <Explorer />
    </Box>
  );
}
