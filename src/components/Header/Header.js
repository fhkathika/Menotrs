import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { border, Box, margin } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const activeStyle={
    fontWeight: "bold",
    color: "black",
    textDecoration:'none',
    margin:'10px',
     }
     const appBar={ 
       background: '#fffde7',
       borderRadius:'5px',
       margin:'20px'
       }
const Header = () => {
    return (
        <div className='container'>
          <div className="navbar">
          <Box sx={{ flexGrow: 1,
        
         }}>
      <AppBar position="static" style={appBar}>
        <Toolbar>
         <Box>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1,flexDirection:'row', color:'black' , fontFamily:'cursive',fontWeight:'700' ,padding:'8px',color:'red' ,border:'1px solid red',borderRadius:"10px" }}>
            Mentors
          </Typography>
         </Box>
          
          <Box sx={{ flexGrow: 1,
            display:'flex',
            justifyContent:'center'
            }}>
          <NavLink style={activeStyle} to="/home" >
                Home
            </NavLink>
            <NavLink   
            style={activeStyle}
   to="/about" >
                About
            </NavLink>
            <NavLink style={activeStyle} to="/services">
                Services
            </NavLink>
            <NavLink style={activeStyle} to="/books">
                Books
            </NavLink>
          </Box>
       
          
        </Toolbar>
      </AppBar>
    </Box>
          </div>
             
            
        </div>
    );
};

export default Header;