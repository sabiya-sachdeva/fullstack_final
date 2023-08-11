
import React, { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import BookCard from "./BookCard";

import "../App.css";




function BookList(){
    const [books, setBooks]=useState([]);

    useEffect(()=>{
        axios
        .get("https://backend-sabiya.onrender.com/books")
        .then((res) => {
          console.log(res.data);
          setBooks(res.data);
        })
        .catch((err) => {
          console.log("Error from BookList");
        });
    }, []);

    const deleteBook = (bookId) => {
        axios
        //.delete("https://backend-sabiya.onrender.com/books"+bookId)
        .delete(`https://backend-sabiya.onrender.com/books/${bookId}`)

          //.delete(`https://backend-sabiya.onrender.com/books${bookId}`)
          .then((res) => {
            console.log(`Book with id ${bookId} deleted`);
            setBooks(books.filter((book) => book._id !== bookId));
          })
          .catch((err) => {
            console.log(`Error deleting book with id ${bookId}`);
          });
    };
    
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} deleteBook={deleteBook}key={k} />);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h1 className='display-4 text-center'>Books List</h1>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/AddBook'
                className='btn btn-info float-right'
                >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
            
    );
}
export default BookList;

     
     