import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function EmailList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Today
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Subject Line
              </Typography>
              {"I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Subject Line
              </Typography>
              {"I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider />
      <ListSubheader component="div" id="nested-list-subheader">
        Yesterday
      </ListSubheader>

      <ListItemButton>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Subject Line
              </Typography>
              {"I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Subject Line
              </Typography>
              {"I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider />
    </List>
  );
}
