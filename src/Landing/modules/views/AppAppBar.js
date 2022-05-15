import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
// import myimg from 'public/ST.png'

// import image from '/ST.png'



const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />

          {/* <img src={image}/> */}
          <img src="https://firebasestorage.googleapis.com/v0/b/contrivers-project-assets.appspot.com/o/ST%20(5).png?alt=media&token=243e8420-3804-4c47-8bce-3b153a10d4ce"
          // style={width:20px, height:20px}
          style={{"height" : "35px", "width" : "35px"}}
          
          />
          
          <Link
            // variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'SwiftTransit'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/user-login"
              sx={rightLink}
            >
              {'Sign In'}
            </Link> */}
            <Link
              variant="h6"
              underline="none"
              href="/user-signup"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Register'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
