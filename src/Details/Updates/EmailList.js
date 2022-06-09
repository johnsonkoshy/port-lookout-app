import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function EmailList({emailList, openEmail}) {
  const beforeOpenEmail= (e, id)=>{
    openEmail(id)
  }
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
      {
        emailList?.map((email,idx)=>{
          const {to,subject,updates,id} = email;
          return(
            <>
              <ListItemButton onClick={e=> beforeOpenEmail(e,idx)}>
                <ListItemText
                  primary={to}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {subject}
                      </Typography>
                      {updates}
                    </>
                  }
                />
              </ListItemButton>
              <Divider />
            </>
          )
        })
      }
      
      
    </List>
  );
}
