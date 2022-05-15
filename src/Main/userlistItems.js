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
import MoneyIcon from '@mui/icons-material/Money';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <a href="/user-dashboard"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Dashboard" /></a>
    </ListItemButton>
     <ListItemButton>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <a href="/user/scan-cash"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Scan for cash" /></a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <a href="/user/scan-wallet"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="Scan for wallet" /></a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <a href="/user/all-user-tickets"  style={{ textDecoration: 'none', color: 'black' }}><ListItemText primary="All Tickets" /></a>
    </ListItemButton>
    {/*<ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Bus Travelled" />
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