import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import SortBy from "./SortBy";
import Result from "./Result";

function BookSystem() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  const allowedGenres = [
    "fiction",
    "mystery",
    "science fiction",
    "fantasy",
    "romance",
    "horror",
    "biography",
    "history",
  ];

  const handleAddBook = () => {
    if (!title.trim() || !genre.trim()) {
      setError("Please fill in both title and genre!");
      return;
    }

    const toLowerCaseGenre = genre.toLowerCase();

    if (!allowedGenres.includes(genre.toLowerCase())) {
      setError(
        `Invalid genre! Allowed genres: ${allowedGenres
          .map((g) => g.charAt(0).toUpperCase() + g.slice(1))
          .join(", ")}`
      );
      return;
    }

    dispatch(addBook({ title, genre: toLowerCaseGenre }));
    setTitle("");
    setGenre("");
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddBook();
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
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            onKeyPress={handleKeyPress}
          />
          <input
            type="text"
            name="Genre"
            id="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
              setError("");
            }}
            onKeyPress={handleKeyPress}
          />
          <button className="AddBtn" onClick={handleAddBook}>
            Add
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
      <SortBy />
      <Result />
    </div>
  );
}

export default BookSystem;
