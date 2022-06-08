import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import API from '../services/API';

const services = new API();
export default function Overview({portid}) {
  const [overviewData, setOverviewData] = React.useState({})
  React.useEffect(()=>{
    (async () => {
      const returnedData = await services.getPortCallDetails(portid)
      setOverviewData({...returnedData})
    })()
  },[])


  return (
    <>
      <Alert severity="warning" sx={{ mb: 1 }}>
        <AlertTitle>Caution</AlertTitle>
        Ship delayed due to weather conditions
      </Alert>
      <Box>
        <Card sx={{ m: 1 }}>
          <CardContent>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 1,
                fontWeight: 700,
                // letterSpacing: ".1rem",
                textDecoration: "none",
                color: "text.secondary"
              }}
            >
              PORT
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="PortID"
              defaultValue={portid}
              margin="normal"
            />
            <TextField
              required
              id="outlined-required"
              defaultValue={"Port Name"}
              label="Port"
              value={overviewData.port}
              margin="normal"
            />
          </CardContent>
        </Card>
        <Card sx={{ m: 1 }}>
          <CardContent>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 1,
                fontWeight: 700,
                // letterSpacing: ".1rem",
                textDecoration: "none",
                color: "text.secondary"
              }}
            >
              ETA'S
            </Typography>

            <TextField
              required
              id="outlined-required"
              label="Estimated Time of Arrival"
              defaultValue="Jun 4, 1600"
              margin="normal"
            />
            <TextField
              required
              id="outlined-required"
              label="Estimated Time of Berthing"
              defaultValue="Jun 4, 1600"
              margin="normal"
              error
            />
            <TextField
              required
              id="outlined-required"
              label="Estimated Time of Completion"
              defaultValue="Jun 4, 1600"
              margin="normal"
            />
            <TextField
              required
              id="outlined-required"
              label="Estimated Time of Discharge"
              defaultValue="Jun 4, 1600"
              margin="normal"
            />
          </CardContent>
        </Card>
        <Card sx={{ m: 1 }}>
          <CardContent>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 1,
                fontWeight: 700,
                // letterSpacing: ".1rem",
                textDecoration: "none",
                color: "text.secondary"
              }}
            >
              CONTACTS
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Operator"
              defaultValue="John Smith"
              margin="normal"
            />
            <TextField
              required
              id="outlined-required"
              label="Charterer"
              defaultValue="Stusco"
              margin="normal"
            />
            <TextField
              required
              id="outlined-required"
              label="Agent"
              defaultValue="Bill White"
              margin="normal"
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
