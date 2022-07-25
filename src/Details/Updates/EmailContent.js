import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import API from "../../services/API";

const services = new API();
export default function EmailContent({ emailData, portid }) {
  const [attachments, setAttachments] = React.useState([]);
  const { subject, to, updates, id } = emailData;

  React.useEffect(() => {
    (async () => {
      const items = await services.getPortUpdateFiles(portid, id);
      setAttachments(items);
    })();
  }, [portid, emailData]);

  if (!(to && to.length)) return (
    
    <Container maxWidth>
      <Box sx={{ display: "flex", p: 1 }}>
        <Avatar alt="Srinee Bajaj" sx={{ m: 1 }} />

        <Box sx={{ml: 1}}>
          <Typography sx={{ fontWeight: 600}}>SENDER</Typography>
          <Typography>Re: Subject Line</Typography>
        </Box>
      </Box>
      <Divider />
      <Stack spacing={2} direction="row" sx={{ p: 2, mt: 2, mb: 2 }}>
        
            <Button
              variant="outlined"
              component="a"
            > AttachedDocument.pdf
            </Button>
      </Stack>
      <Divider />
      <Box sx={{ mt: 2, mb: 2, p: 2 }}>
        <Typography component="p">ETA:  15:00;  ETB:  15:20;  ETC: 15:45;  ETD:  15:35</Typography>
        <Box sx={{m: 2}}></Box>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque libero ut non a, mi varius gravida. In maecenas aliquet vestibulum enim massa tempus nunc non proin. Risus ac ultrices in facilisis quis. Ultricies fusce ultrices aenean faucibus nec tortor, bibendum lectus.</Typography>
      </Box>
      <Divider />
      <Box>
        <Box sx={{ mt: 2, mb: 2, p: 2 }}>
          <Typography>From: Sender</Typography>
          <Typography>Sent: Date, Time Stamp</Typography>
          <Typography>To: Recipient</Typography>
          <Typography>Re: Subject Line</Typography>
        </Box>
        <Box sx={{m: 2}}></Box>
        <Box sx={{m: 2}}> 
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque libero ut non a, mi varius gravida. In maecenas aliquet vestibulum enim massa tempus nunc non proin. Risus ac ultrices in facilisis quis. Ultricies fusce ultrices aenean faucibus nec tortor, bibendum lectus.</Typography>
        </Box>
      </Box>
    </Container>
  );
  
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
        {attachments.map((f) => {
          return (
            <Button
              variant="outlined"
              component="a"
              href={f.url}
              target="_blank"
              key={f.id}
            >
              {f.name}
            </Button>
          );
        })}
      </Stack>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography component="p">{updates}</Typography>
      </Box>
    </Container>
  );
}
