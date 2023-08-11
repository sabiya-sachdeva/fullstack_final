
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/Addbook" element={<AddBook />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
