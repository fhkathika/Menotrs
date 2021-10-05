import { Card, CardContent, Grid } from '@mui/material';
import { Box, color } from '@mui/system';
import React from 'react';
import './SingleServiseAnalysis.css'
import CountUp from 'react-countup';

const SingleServiseAnalysis = (props) => {
const{service,name}=props

    return (
  
            <div  className='enrolmentAnalysis'>
               <h1>
               {name} :  <CountUp className='countStyle' start={0} end={service} duration={3} separator=",">

                  </CountUp> student 
                    </h1> 
            
           
           </div>
            
           
          
        
    );
};

export default SingleServiseAnalysis;