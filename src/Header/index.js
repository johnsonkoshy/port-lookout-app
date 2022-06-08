import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import PortMobileMenu from "./PortMobileMenu";
import PortProfile from "./PortProfile";
import Logo from "./Logo";
import PortDesktopMenu from "./PortDesktopMenu";
import Box from "@mui/material/Box";

const Header = () => {
  const pages = ["Create New"];

  return (
    <AppBar position="static" sx={{ mb: "5px", pl: 2, pr: 2 }}>
      <Toolbar disableGutters>
        <Logo display={{ xs: "none", md: "flex" }} />
        {/* <PortMobileMenu pages={pages} /> */}

        <Logo display={{ xs: "flex", md: "none" }} />
        {/* <PortDesktopMenu pages={pages} /> */}
        <Box sx={{ flexGrow: 1, display: "flex" }} />
        <PortProfile />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
