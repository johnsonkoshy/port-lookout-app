import React from "react";
import Typography from "@mui/material/Typography";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { Link } from "react-router-dom";

const Logo = ({ display }) => {
  const isMobile = display.xs === "flex";
  return (
    <>
      <DirectionsBoatFilledIcon sx={{ display }} />
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        sx={{
          mr: 1,
          display,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          flexGrow: isMobile && 1
        }}
      >
        PORT LOOKOUT
      </Typography>
    </>
  );
};

export default Logo;
