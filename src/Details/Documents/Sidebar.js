import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DeleteIcon from "@mui/icons-material/Delete";
import API from '../../services/API';

const services = new API();

export default function Sidebar({portid}) {
  const createNewFolder = async () => {
    const t= await services.createPortDocumentFolder('random-folder',portid);
  }
  const showUpdatesFiles = async () => {
    
  }
  return (
    <Box sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={createNewFolder}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Folders" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={showUpdatesFiles}>
          <ListItemButton>
            <ListItemIcon>
              <AccessTimeFilledIcon />
            </ListItemIcon>
            <ListItemText primary="Updates" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
