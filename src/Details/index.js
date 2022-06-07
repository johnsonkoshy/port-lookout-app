import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Overview from "./Overview";
import Updates from "./Updates";
import Documents from "./Documents";
import StatementOfFacts from "./StatementOfFacts";
import SubHeader from "./SubHeader";
export default function Details() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <SubHeader />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Updates" value="2" />
            <Tab label="Documents" value="3" />
            <Tab label="Statement of Facts" value="4" />
            <Tab label="Other Port Information" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Overview />
        </TabPanel>
        <TabPanel value="2">
          <Updates />
        </TabPanel>
        <TabPanel value="3">
          <Documents />
        </TabPanel>
        <TabPanel value="4">
          <StatementOfFacts />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
