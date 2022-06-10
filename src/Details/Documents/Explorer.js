import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import File from "./File";

export default function Explorer({folders}) {
  return (
    <Box
      sx={{
        width: 1,
        maxWidth: "100%",
        p: 1
      }}
    >
      <TextField fullWidth label="Search" id="fullWidth" sx={{ m: 1 }} />
      <Box sx={{ m: 1, mb: 2 }}>
        <Typography component="span" variant="body2" color="text.primary">
          Folders
        </Typography>
        <Stack spacing={2} direction="row">
          {
            folders.map(folder => {
              return (
              <Button variant="contained">
                < FolderIcon /> {folder.name}
              </Button>
            )
            })
          }
          
        </Stack>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography component="span" variant="body2" color="text.primary">
          Files
        </Typography>
        <Stack spacing={2} direction="row">
          <File />
          <File />
          <File />
        </Stack>
      </Box>
    </Box>
  );
}
