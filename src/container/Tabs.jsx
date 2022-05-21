import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MovieSection from './MovieSection'
import DC from '../components/DC'
import Marvel from '../components/Marvel'
import Characters from '../components/Characters'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Select() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //styles
  const myStyle = {
    color: "rgb(157 23 77)",
    fontSize:'22px',
    fontWeight:'600',
    textTransform:'none'
  }



  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Movies" {...a11yProps(0)} style={myStyle} />
          <Tab label="DC" {...a11yProps(1)} style={myStyle} />
          <Tab label="Marvel" {...a11yProps(2)} style={myStyle} />
          <Tab label="Characters" {...a11yProps(3)} style={myStyle} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <MovieSection />
      </TabPanel>
      <TabPanel value={value} index={1}>
          <DC />
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Marvel />
      </TabPanel>
      <TabPanel value={value} index={3}>
          <Characters />
      </TabPanel>
    </Box>
  );
}

