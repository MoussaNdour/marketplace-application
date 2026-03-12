import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import { CalendarMonth, DesignServices, EventNote, ManageAccounts, RateReview } from '@mui/icons-material';

import { HomeIcon } from 'lucide-react';
import { Button } from '@mui/material';
import { useState } from 'react';


const drawerWidth = 240;

export default function SideBar() {

  return (
    <Box >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:"primary.main"}}>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={"Overview"}  />
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{color:"primary.main"}}>
                <WorkHistoryOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary={"Services Request"}  />
            </ListItemButton>
          </ListItem>
          <ListItem key={3} disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{color:"primary.main"}}>
                <DesignServices/>
              </ListItemIcon>
              <ListItemText primary={"Service Catalog"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={4} disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{color:"primary.main"}}>
                <RateReview/>
              </ListItemIcon>
              <ListItemText primary={"Reviews Feed"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={5} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:"primary.main"}}>
                <CalendarMonth/>
              </ListItemIcon>
              <ListItemText primary={"Availability Calendar"} />
            </ListItemButton>
          </ListItem>
          
        </List>
        <Divider />
        <List>
            <ListItem key={3} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:"primary.main"}}>
                  <ManageAccounts/>
                </ListItemIcon>
                <ListItemText primary={"Settings / Profile"} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    
    </Box>
  );
}
