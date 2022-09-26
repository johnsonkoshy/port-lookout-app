import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import PortTimeline from "./PortTimeline";
import ToDo from "./ToDo2";

export default function Overview({portid, portcallData}) {
  


  return (
    <>
      <Alert severity="warning" sx={{ mb: 1 }}>
        <AlertTitle>Caution</AlertTitle>
        Ship delayed due to weather conditions
      </Alert>
      <Box sx={{display:'flex'}}>
        <Box sx={{flexGrow:2}}>
          <Card sx={{ overflow: 'auto', m: 1 }}>
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
                id="standard-basic"
                // sx={{ m: 9 }}
                variant = "standard"
                label="PortID"
                defaultValue={""}
                
                sx={{width:250, m:3}}
                value={portcallData.id?.toUpperCase()}
              />
       
              <TextField
                required
                id="standard-basic"
                variant = "standard"
                defaultValue={""}
                label="Load Port"
              
                sx={{width:250, m:3}}
                value={portcallData.port}
                // margin="normal"
              />
          
              <TextField
                required
                id="standard-basic"
                variant = "standard"
                defaultValue={""}
                label="Berth"
                
                sx={{width:250, m:3}}
                value={portcallData.port}
                // margin="normal"
              />
            </CardContent>
          </Card>
          <Card sx={{  overflow: 'auto', m: 1 }}>
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
                variant = "standard"
                label="Estimated Time of Arrival"
                defaultValue=""
                sx={{width:250, m:1.5}}
                margin="normal"
              />
              <TextField
                required
                id="outlined-required"
                variant = "standard"
                label="Estimated Time of Berthing"
                defaultValue=""
                sx={{width:250, m:1.5}}
                margin="normal"
                // error
              />
              <TextField
                required
                id="outlined-required"
                variant = "standard"
                label="Estimated Time of Completion"
                defaultValue=""
                sx={{width:250, m:1.5}}
                margin="normal"
              />
              <TextField
                required
                id="outlined-required"
                variant = "standard"
                label="Estimated Time of Discharge"
                defaultValue=""
                sx={{width:250, m:1.5}}
                margin="normal"
              />
            </CardContent>
          </Card>
          <Card sx={{  overflow: 'auto', m: 1 }}>
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
                variant = "standard"
                id="outlined-required"
                label="Operator"
                sx={{width:250, m:3}}
                defaultValue=""
                // margin="normal"
              />
              <TextField
                required
                id="outlined-required"
                variant = "standard"
                label="Agent"
                defaultValue=""
                sx={{width:250, m:3}}
                // margin="normal"
              />
              <TextField
                required
                id="outlined-required"
                variant = "standard"
                label="Charterer"
                defaultValue=""
                sx={{width:250, m:3}}
                // margin="normal"
              />
              
            </CardContent>
          </Card>
        </Box>

        <Box sx={{display:'flex', flexGrow:1}}>
          <Card sx={{ maxHeight: '100%', overflow: 'auto', m: 1 }}>
            <CardContent >
              <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 1,
                    fontWeight: 700,
                    // letterSpacing: ".1rem",
                    textDecoration: "none",
                    color: "text.secondary",
                    textAlign:'center'
                  }}
                >
                  STATUS LOG
              </Typography>
              <Divider sx={{mb:2}}/>

              <PortTimeline />
              
            </CardContent>
          </Card>

          

          <Card sx={{ overflow: 'auto', m: 1 , flexGrow:1}}>
            <CardContent >
              <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 1,
                    fontWeight: 700,
                    // letterSpacing: ".1rem",
                    textDecoration: "none",
                    color: "text.secondary",
                    textAlign:'center'
                  }}
                >
                 CHARTERER CHECKLIST
              </Typography>
              <Divider sx={{mb:2}}/>
              <ToDo />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}
