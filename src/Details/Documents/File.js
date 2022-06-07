import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function File() {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          The preview of the file shows here
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
          leo ac felis auctor fermentum.
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ textTransform: "none" }}>
          Vessel_Registry.docx
        </Button>
      </CardActions>
    </Card>
  );
}
