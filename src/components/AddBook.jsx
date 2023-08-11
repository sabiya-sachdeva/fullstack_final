import React, { useState } from "react";
import axios from "axios";
 import "../App.css";
 import 'bootstrap/dist/css/bootstrap.css';



function AddBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (event) => {
    setBookData({
      ...bookData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://backend-sabiya.onrender.com/books", bookData)
      .then((res) => {
        console.log(res);
        window.location.href = "/"; // Redirect to homepage
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">

          <div class="col-md-8 m-auto">
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Add Book</h2>
            </div>
            <p className="lead text-center">Create new book</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={bookData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={bookData.author}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={bookData.description}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-info btn-block mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
