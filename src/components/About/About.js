import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Teachers from '../Teachers/Teachers';
import './About.css'

const About = () => {
  // load teachers data
  const [teachers,setTeachers]=useState([])
  useEffect(()=>{
    fetch('./teachers.JSON')
    .then(res => res.json())
    .then(data => setTeachers(data))
  },[])
    return (
        <div>
           <h1 style={{color:"red"}}>Our Teachers</h1>
               <div className="teachers">
          
        {/* teachers card */}
        {
teachers.map(teacher =><Teachers   key={teacher.id} teacher={teacher}></Teachers>)
        }
    
  
            </div>
            <hr/>
            <h1 style={{color:"red"}}>About</h1>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} >
           
  <Box gridColumn="span 8"  sx={{ ml: 4 }} >
  
  <p>Mentors’  is the most reputed educational institution and admission consulting house dedicated to prepare students in their admissions, standardized tests and academic studies. It’s a student-focused institution that offers a vibrant and inspirational learning environment.

Our enviable reputation in preparing students for admission tests of lBA, NSU, EWU and other universities in programs like BBA, CSc., MBA, EMBA, MBM and standardized tests like IELTS, TOEFL, SAT is the testament of our continued tradition of quality.

Since 1996, our students have continually registered outstanding results in their tests. Our excellent pool of teachers, comprehensive courseware and highest number of practice tests lead towards a complete preparation. Dedicated and interactive instructions in small classroom settings for personal care ensure best results. All these are meant for test success of our students.</p>
  </Box>
  <Box gridColumn="span 4" sx={{ mt: 4 }}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX79RjzlfKgvPQg1vIn2Vvu719_K3QPUwjf9GXLx9m5En3XFW619hbhoKXV-lA5YOKkpQ&usqp=CAU" alt="" />
  </Box>
  
</Box>
 <hr />
            <div >
            <h1 style={{color:"red"}}>Mission Statement</h1>
            <div className='img2'><img src="https://www.mentors.com.bd/immigration/wp-content/uploads/2021/02/Skill-worker-1-1140x494.jpg" alt="" /></div>
          
            <div className='about2'>
               <p>  Mentors’ aims at transforming lives by offering the right education and career guidance for students with help of a capable team of professional consultants. We offer students an opportunity to identify the right universities thereby facilitating their lifelong learning. We aim to enable students to achieve their dreams and reach their potential through unparalleled academic excellence. In addition to that, we also want to play our active roles in contributing to our society. We aim to be an epitome of social awareness by making sure that our students can go abroad and contribute to their own community. Even when they come back, they expedite the process of socio economic development of our very own society. Be it the active contribution to the country’s own GDP or the flow of remittance in the country, we make sure that we can have sustainable impact in the society and give back to the community that we represent and are proud of being a part of. We aspire to be the high-esteemed hallmark of honesty, courage and fair play along with the teamwork of our people and our ability to respond effectively to the positive and productive changes taking place in all aspects of life including communication, skills, technology and environment.</p>
         
            </div>

            </div>
           
           
        </div>
    );
};

export default About;