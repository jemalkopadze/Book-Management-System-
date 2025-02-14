// import "../style/main.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import SortBy from "./SortBy";
import Result from "./Result";

function BookSystem() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const handleAddBook = () => {
    if (title && genre) {
      dispatch(addBook({ title, genre }));
      setTitle("");
      setGenre("");
    }
  };

  return (
    <div className="content">
      <h1>Book Management System</h1>
      <div className="Addbook">
        <div>
          <p className="title">Add New Book</p>
        </div>
        <div className="bookInput">
          <input
            type="text"
            name="Title"
            id="book"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="Genre"
            id="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <button className="AddBtn" onClick={handleAddBook}>
            Add
          </button>
        </div>
      </div>
      <SortBy />
      <Result />
    </div>
  );
}

export default BookSystem;
