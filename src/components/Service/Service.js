import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { border } from '@mui/system';
import React from 'react';




const Service = (props) => {
    const { img,name,price}=props.service
    return (
        <div >
          
            <Card sx={{ maxWidth: 345, borderRadius:'5%',color:"#fffde7",boxShadow:3}}>
      <CardHeader  sx={{color:"black"}}
       
       title={name}
    
      />
      <CardMedia
        component='img'
        height="194"
        image={img}
     
        alt="Paella dish"
      />
      <CardContent sx={{ backgroundColor:"red" }}>
        <Typography variant="body2" color="black" >
        price:tk {price}
        </Typography>
     
      </CardContent>
    
    
    </Card>
        </div>
    );
};

export default Service;