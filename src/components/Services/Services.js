import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services]=useServices()
    return (
        <div className='services-components'>
            <h1 style={{color:"firebrick"}}>Our Services</h1>
            <div className="services-style">
            {
                services.map(service => <Service service={service}></Service> )
            }
            </div>
           
        </div>
    );
};

export default Services;