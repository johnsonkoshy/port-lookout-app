import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TemporaryEmailContent from "./TemporaryEmailContent";


export default function EmailListBar() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
    <Stack sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <TextField size="medium" label="Search" sx={{ m: 1 }} />
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="All" value="1" />
                    <Tab label="Unread" value="2" />
               
                </TabList>
                </Box>
                <TabPanel variant="scrollable" value={"1"}>
                    <TemporaryEmailContent></TemporaryEmailContent>
                </TabPanel>
                <TabPanel value="">Unread</TabPanel>
            </TabContext>
        </Box>
        
    </Stack>
    )

}
