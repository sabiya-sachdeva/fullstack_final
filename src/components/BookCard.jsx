import React from "react";
import "../App.css";

function BookCard ({book,deleteBook}){

    const handleDelete = () => {
        deleteBook(book._id);
      };

    return(
        <div className="BookList">
      
      
       
           
      <div className="list">
        <div className="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div className="desc">
            <h2><a href={`/show-book/${book._id}`}>{book.tittle}</a></h2>
            <h3>{book.author}</h3>
            <p>{book.description}</p>

            <button
              className="btn btn-warning float-right float-bottom decorated-btn"
              onClick={handleDelete}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookCard;