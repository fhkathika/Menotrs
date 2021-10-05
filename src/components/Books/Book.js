
import React, { useEffect, useState } from 'react';
import BookSingle from '../BookSingle/BookSingle';
import CourseSchedule from '../CourseSchedule/CourseSchedule';
import './Books.css'

const Book = () => {
  // load books
  const [books,setBooks]=useState([])
  useEffect (()=>{
    fetch('./books.JSON')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])

    return (
      <div>
        <h1 style={{color:'red'}}>Our Course Books</h1>
 <div className="books">
          {
books.map(book => <BookSingle book={book}></BookSingle>)
          }
        </div>
     
        <div>
           {/* batch schedule table */}
          
           <div className='table'>
           <h1 style={{color:'red'}}>Batch Schedule</h1>
           <CourseSchedule></CourseSchedule>

           </div>
          

        </div>
      </div>
       
      
    );
};

export default Book;