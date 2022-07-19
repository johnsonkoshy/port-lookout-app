import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ToDo from './Todo';
import data from './data';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  return (
    <Box sx={{ bgcolor: 'background.paper' , }}>
      
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: "divider",}}
            
        >
            <Tab label="Load" {...a11yProps(0)} />
            <Tab label="Discharge" {...a11yProps(1)} />
            <Tab label="General" {...a11yProps(2)} />
        </Tabs>
        
        <TabPanel value={value} index={0} dir={theme.direction}>
            <ToDo data={data}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <ToDo data={data}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <ToDo data={data}/>
        </TabPanel>
    </Box>
  );
}
