import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import StudentAnalysis from '../StudentAnalysis/StudentAnalysis';
import './Home.css'


const Home = () => {
   
    const [services]=useServices()
    return (
        <div>
            <div>
                <StudentAnalysis service={services}></StudentAnalysis>
            </div>
        <div>
            <h1>Our Popular Services</h1>
            <div className="homeServicesStyle">
            {
                services.slice(0,4).map(service => <Service service={service}></Service>)
            }
            </div>
        </div>
        </div>
    );
}

export default Home;