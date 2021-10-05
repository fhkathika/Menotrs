import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './BookSingle.css'
const BookSingle = (props) => {
    const {img,name}=props.book
    return (
        <div >
            <Card sx={{ maxWidth: 390}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          width="300"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        
        </CardContent>
      </CardActionArea>
    
    </Card>
            
        </div>
    );
};

export default BookSingle;