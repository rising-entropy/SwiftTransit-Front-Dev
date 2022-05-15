import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <a href="/admin-dashboard"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Dashboard" /></a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <a href="/conductor-data"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Conductors" /></a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <a href="/customer-data"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Customers" /></a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <a href="/create-conductor"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Add Conductors" /></a>
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <a href="/bus-travels"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Buses" /></a>
    </ListItemButton> */}
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <a href="/all-bus-travels"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Bus Travelled" /></a>
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <a href="/all-bus-travels"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Bus Travelled" /></a>
    </ListItemButton> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);