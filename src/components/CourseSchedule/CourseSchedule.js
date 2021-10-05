
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import React from 'react';

const CourseSchedule = () => {
  function createData(courseName, day1, day2, day3, day4) {
    return { courseName, day1, day2, day3, day4 };
  }
  const rows = [
    createData('IELTS', '11:30 AM', '6:0 PM', '2:40 PM'),
    createData('GED', '2:30 PM','1:30 PM', '3:15 PM'),
    createData('SAT', '2:00 PM', '1:40 PM', '2:40 PM', '6:00 PM'),
    createData('Grammer & Writting', '3:05 PM', '11:00 AM', '6:20 PM', '4:30 PM'),
    createData('Speking English', '2:30 PM','1:30 PM', '3:15 PM'),
  ];
    return (
        <div>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:"red"}}>
            <TableCell sx={{ color:"white" }} >Course</TableCell>
            <TableCell sx={{ color:"white" }}align="right">Sunday</TableCell>
            <TableCell sx={{ color:"white" }}align="right">Tuesday</TableCell>
            <TableCell sx={{ color:"white" }}align="right">Wednesday</TableCell>
            <TableCell sx={{ color:"white" }}align="right">Friday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.courseName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.courseName}
              </TableCell>
              <TableCell align="right">{row.day1}</TableCell>
              <TableCell align="right">{row.day2}</TableCell>
              <TableCell align="right">{row.day3}</TableCell>
              <TableCell align="right">{row.day4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default CourseSchedule;