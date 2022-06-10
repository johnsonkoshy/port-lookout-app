import React from "react";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Explorer from "./Explorer";
import API from '../../services/API'

const services = new API();

export default function Documents({portid}) {
  React.useEffect(()=>{
    (async ()=>{
      const url = await services.getPortUpdates('1234')
      console.log(url) 
    })()
  },[])
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar portid={portid}/>
      <Divider orientation="vertical" flexItem />
      <Explorer />
    </Box>
  );
}
