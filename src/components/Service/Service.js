import {  Card, CardContent, CardHeader, CardMedia,Typography } from '@mui/material';

import React from 'react';




const Service = (props) => {
    const { img,name,price}=props.service
    return (
        <div >
          
            <Card sx={{ maxWidth: 345, borderRadius:'5%',color:"#fffde7",boxShadow:3}}>
      <CardHeader  sx={{color:"red"}}
       
       title={name}
    
      />
      <CardMedia
        component='img'
        height="194"
        image={img}
     
        alt=""
      />
      <CardContent sx={{ backgroundColor:"firebrick" }}>
        <Typography variant="body2" color="white" >
        price:tk {price}
        </Typography>
     
      </CardContent>
    
    
    </Card>
        </div>
    );
};

export default Service;