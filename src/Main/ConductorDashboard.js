import * as React from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import './styles.css'
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
import { mainListItems, secondaryListItems } from './conductorlistItems';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
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

function DashboardContent() {
  var username;
  const [open, setOpen] = React.useState(true);
  const [theBusId, setTheBusId] = useState("")
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [Buses, setBuses] = useState([])
  useEffect(()=>{
    console.log("im in main");
    const token = getToken();
    var decoded = jwt_decode(token);
    username = decoded["data"]["data"]["_id"];
    console.log(username);
        const getConductorURL = getURL()+ 'conductors';
        axios.get(getConductorURL,
            {headers: {
            "Content-Type": "application/json",
            "authorization": `${token}`
        }})
        .then(res => {
            console.log(res.data);
            console.log("run");
            const getBusesURL = getURL()+ 'buses/buses';
            axios.get(getBusesURL,
                {headers: {
                "Content-Type": "application/json",
                "authorization": `${token}`
            }})
            .then(res => {
                console.log(res.data);
                setBuses(res.data);
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

const handleBusSelect = ((e) => {
  setTheBusId(e.target.value);
});

const addBusTravel = e => {
  const d = new Date();
  e.preventDefault();
  const thatURL = getURL() + "bus-travel";
  const token = getToken();
    var decoded = jwt_decode(token);
    username = decoded["data"]["data"]["_id"];
  axios.post(
      thatURL,
      {
          busID: theBusId,
          conductorID: username,
          startTime: d.getTime()
      },
      {
          headers: {
              "Content-Type": "application/json",
          },
      }
  )
  .then((response) => {
     if (response.status === 201) {
          const data = response.data;
          alert("Ride has started")
          window.location='/bus-travels'
      }
  })
  .catch((err) => {
    alert("Some Error Occurred");
  });
};

const logoutHandler = () => {
  localStorage.setItem("token", "")
  window.location = "/";
}


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
            <FormControl className='bus_select'>
  <InputLabel id="demo-simple-select-label" className='bus_id' >Bus ID</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    onChange={handleBusSelect}
    label="Bus ID"
  >
    {Buses.map((value, key) => {
            return (
              <MenuItem value={value._id} key={key}>
                {value._id}
              </MenuItem>
            );
          })}
    {/*<MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>*/}
  </Select>
  <br></br>
  <Button variant="contained" onClick={addBusTravel}>Start Trip</Button>
</FormControl>
              
              
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default function ConductorDashboard() {
  
  

  return <DashboardContent />;
}