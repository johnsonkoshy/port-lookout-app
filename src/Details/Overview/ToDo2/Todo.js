import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
 
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CommentIcon from '@mui/icons-material/Comment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Stack from '@mui/material/Stack'
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';

export default function CheckboxList(props) {
  const {data} = props;
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
      <Box textAlign='right' >
        <Button fullWidth variant='outlined'>
          <AddIcon/>
          Add
        </Button>
      </Box>
      
      {data.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        const isChecked = checked.indexOf(value) !== -1;
        const fadedCss = {
          opacity:0.5
        }
        const sx=isChecked ? fadedCss : null;
        return (
          <ListItem
            key={value}
            sx={sx}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={isChecked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} secondary={<SecondRow/>}/>
              
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}


const SecondRow =()=>{
    return(
        <Stack direction="row" spacing={0} >
            <Stack direction="row" spacing={0} mr={1} >
                <FormatListBulletedIcon fontSize='x-small' sx={{mt:'2px'}}/>
                <Typography sx={{fontSize:'12px'}}>
                    Completed
                </Typography>
            </Stack>
            <Stack direction="row" spacing={0} >
                <PersonOutlineIcon fontSize='x-small' sx={{mt:'2px'}}/>
                <Typography sx={{fontSize:'12px'}}>
                    Jack Smith
                </Typography>
            </Stack>
            
        </Stack>
    )
}