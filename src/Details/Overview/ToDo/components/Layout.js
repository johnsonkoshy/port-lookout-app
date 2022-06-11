import React from "react";
import { Typography , Paper, Toolbar, AppBar} from '@mui/material';
// import { AppBar, Toolbar, Typography, Paper } from "@material-ui";

const Layout = React.memo(({ children }) => (
  <Paper
    elevation={2}
    style={{ padding: 0, margin: 0}}
  >
    {children}
    
  </Paper>
));

export default Layout;
