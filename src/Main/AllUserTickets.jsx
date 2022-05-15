import * as React from 'react';
import { useEffect, useState } from 'react';

import jwt_decode from "jwt-decode";
import axios from 'axios';
import { getURL, getToken } from '../utils/index';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { mainListItems, secondaryListItems } from './userlistItems';
import Generator from './Components/Generator';


export default function AllUserTickets() {
  

  return <DashboardContent />;
}

// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();


function createData(username,name,phone,conductorLicenseNumber) {
    return { username,name,phone,conductorLicenseNumber  }
}
const logoutHandler = () => {
  localStorage.setItem("token", "")
  window.location = "/";
}
  


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [rows, setrows] = useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };
var username;
  useEffect(()=>{
    const token = getToken();
    var decoded = jwt_decode(token);
    username = decoded["data"]["data"]["_id"];
        const getTicketsURL = getURL()+ 'bus-travel-ticket/tickets-of-user/' + username;
        axios.get(getTicketsURL,
            {headers: {
            "Content-Type": "application/json",
            "authorization": `${token}`
        }})
        .then(res => {
            console.log(res.data);
            
            setrows(res.data);
            console.log(rows);
            console.log("run");
            
        })
        .catch((err) => {
            console.log(err.message);
            if(err.message==="Request failed with status code 401")
            {
                alert("Something went wrong");
   
                return;
            }
        }

        )
},[]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <p onClick={logoutHandler} style={{cursor: 'pointer'}}>Logout</p>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
<TableContainer component={Paper}>
      {
      
        rows.map((row,i) => (
          <div className='ticket-card' style={{margin: '10px auto'}}>
            Source: {row.source=="" ? 'N/A' : row.source}<br/>
            Destination: {row.destination=="" ? 'N/A' : row.destination}<br/>
            Price per ticket: {row.price}<br/>
            Quantity: {row.quantity}<br/>
            Type: {row.isDayPass?"Day Pass":"Ticket"}<br/>
            QR Code: <br /><br />
            <Generator text={row['_id']} />
          </div>
        ))}
      
    </TableContainer>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
