import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import API from '../../services/API';

const services = new API();
export default function EmailContent({emailData, portid}) {
  const [attachments, setAttachments] = React.useState([]);
  const {subject, to, updates,id} = emailData;
 
  React.useEffect(()=>{
    (async ()=>{
      const items = await services.getPortUpdateFiles(portid, id);
      setAttachments(items)
    })()
  },[portid,emailData])
  return (
    <Container maxWidth>
      <Box sx={{ display: "flex", p: 1 }}>
        <Avatar alt="Srinee Bajaj" sx={{ m: 1 }} />

        <Box>
          <Typography>{to}</Typography>
          <Typography>{subject}</Typography>
        </Box>
      </Box>
      <Divider />
      <Stack spacing={2} direction="row" sx={{ p: 2 }}>
        {
          attachments.map(f=>{
            return <Button variant="outlined" component="a" href={f.url} target="_blank" key={f.id}>{f.name}</Button>
          })
        }
        
      </Stack>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography component="p">
         {updates}
        </Typography>
      </Box>
    </Container>
  );
}
