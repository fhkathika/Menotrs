import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import useServices from '../../hooks/useServices';
import SingleServiseAnalysis from '../SingleServiseAnalysis/SingleServiseAnalysis';
import './StudentAnalysis.css'


const StudentAnalysis = () => {
    const [services]=useServices()
 
    return (
        <div>
            <h1 style={{color:"firebrick"}}> Service Enrolment Analysis</h1>
        <div>
            {/* map data for student enrollment analysis */}
                          
    {
      services.slice(0,3).map(service=><SingleServiseAnalysis key={service.id} service={service.enrollment} name={service.name}></SingleServiseAnalysis>)
    }
              
        </div>
        </div>
    );
};

export default StudentAnalysis;