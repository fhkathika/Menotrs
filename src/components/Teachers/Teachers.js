import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Teachers = (props) => {
    const {img,name,goodAt}=props.teacher

    return (
        <div>
            
           <Card sx={{ maxWidth: 345 , maxHeight:600 ,mt:4,ml:4  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={img}
        />
        <CardContent style={{backgroundColor:"firebrick"}}>
          <Typography style={{color:"white"}} gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography  style={{color:"white"}} variant="body2" color="text.secondary">
          {goodAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card> 
        </div>
    );
};

export default Teachers;