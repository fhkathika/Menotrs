import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import './Footer.css'
import RestoreIcon from '@mui/icons-material/Restore';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, color } from '@mui/system';

const Footer = () => {
    return (
        <div className="footer">
          <h1 className="footerTag" >Build Your trust on us </h1>
         <p><small className="footerTag">Copyright © 2020 Mentor. All rights reserved. 0997878676 </small> </p>
    
        
 
         <BottomNavigationAction  label="Twitter" icon={<TwitterIcon style={{color:"gray"}}  />} />
  <BottomNavigationAction color="white"   label="Facebook" icon={<FacebookIcon style={{color:"gray"}} />} />
  <BottomNavigationAction color="white" label="Instagram" icon={<InstagramIcon style={{color:"gray"}}  />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon style={{color:"gray"}}  />} />

 


        </div>
    );
};

export default Footer;