import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function EmailContent() {
  return (
    <Container maxWidth>
      <Box sx={{ display: "flex", p: 1 }}>
        <Avatar alt="Srinee Bajaj" sx={{ m: 1 }} />

        <Box>
          <Typography>Ali Connors</Typography>
          <Typography>Recepient 1</Typography>
          <Typography>RE: Subject</Typography>
        </Box>
      </Box>
      <Divider />
      <Stack spacing={2} direction="row" sx={{ p: 2 }}>
        <Button variant="outlined">Attachment 1</Button>
        <Button variant="outlined">Attachment 2</Button>
        <Button variant="outlined">Attachment 3</Button>
      </Stack>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
          leo ac felis auctor fermentum. Duis quis accumsan turpis, at viverra
          augue. Vivamus sed quam faucibus, pellentesque erat sit amet, iaculis
          erat. Proin finibus orci ut lacus molestie bibendum. Donec nisl felis,
          maximus eget mi ut, malesuada blandit arcu. Nunc sed mattis massa, a
          ultrices sapien. Nullam ac scelerisque ipsum.
        </Typography>
      </Box>
    </Container>
  );
}
