import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
           <h1>Our Teachers</h1>
               <div className="teachers">
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 , maxHeight:600 ,mt:4,ml:4  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://camblyavatars.s3.amazonaws.com/5b7aa9270a570b00436455c5s200?h=df6e711bd5846a411ca00a735e09605e"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Anna P.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          Teaching since 2011
Awarded National Merit Scholarship from Pillsbury Corporation
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 , maxHeight:600 ,mt:4,ml:4  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://camblyavatars.s3.amazonaws.com/5cac24444a1fd30031917a8ds200?h=055b9257247a06c245c941b0752164ee"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Nikita B.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
Speaks
Teaches Beginner, Intermediate, Advanced
T from Tomsk State Univeristy
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 , maxHeight:600 ,mt:4,ml:4  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://camblyavatars.s3.amazonaws.com/5d3e114605cf394902caf899s200?h=afd9db033fca611b17f4511b95e10e3a"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Robin L.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          

          Speaks Spanish
Teaching since 2011
Awarded National Merit Scholarship from Pillsbury
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>
       
    </Grid>
    <Grid container item spacing={3}>
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 , maxHeight:600 ,mt:4,ml:4  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://camblyavatars.s3.amazonaws.com/5dd97565a2f254bff57ae6ccs200?h=f0c97e65497dc73fc5489b0072d794c3"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Nathaniel B.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          Speaks English, Spanish, Portuguese
Teaching since 2018
Teaches Beginner, Intermediate
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 , maxHeight:600 ,mt:4,ml:4  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://camblyavatars.s3.amazonaws.com/5cab5665319e2f002607a766s200"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Felipe R.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
Speaks
Teaches Beginner, Intermediate, Advanced
T from Tomsk State Univeristy
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 , maxHeight:600 ,mt:4,ml:4  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://camblyavatars.s3.amazonaws.com/5cff1ebf9f59ee002a43061cs200?h=9791383b8907acaacfd56b91f47d233a"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Petrena
          </Typography>
          <Typography variant="body2" color="text.secondary">

          Speaks Russian, English
Teaches Beginner, Intermediate
Teaches students 1 and up
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
      </Grid>
       
    </Grid>
      </Grid>
    </Box>
            </div>
            <hr/>
            <h1>About</h1>
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
            <h1>Mission Statement</h1>
            <div className='img2'><img src="https://www.mentors.com.bd/immigration/wp-content/uploads/2021/02/Skill-worker-1-1140x494.jpg" alt="" /></div>
          
            <div className='about2'>
               <p>  Mentors’ aims at transforming lives by offering the right education and career guidance for students with help of a capable team of professional consultants. We offer students an opportunity to identify the right universities thereby facilitating their lifelong learning. We aim to enable students to achieve their dreams and reach their potential through unparalleled academic excellence. In addition to that, we also want to play our active roles in contributing to our society. We aim to be an epitome of social awareness by making sure that our students can go abroad and contribute to their own community. Even when they come back, they expedite the process of socio economic development of our very own society. Be it the active contribution to the country’s own GDP or the flow of remittance in the country, we make sure that we can have sustainable impact in the society and give back to the community that we represent and are proud of being a part of. We aspire to be the high-esteemed hallmark of honesty, courage and fair play along with the teamwork of our people and our ability to respond effectively to the positive and productive changes taking place in all aspects of life including communication, skills, technology and environment.</p>
         
            </div>

            </div>
            <hr />
           
        </div>
    );
};

export default About;