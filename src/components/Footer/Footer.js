import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import './Footer.css'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, color } from '@mui/system';

const Footer = () => {
    return (
        <div className="footer">
          <h1 >Build Your trust </h1>
         <BottomNavigation className="footerNav" showLabels>
         
  <BottomNavigationAction  label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction color="white" label="Favorites" icon={<FavoriteBorderIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />

  </BottomNavigation>
        </div>
    );
};

export default Footer;