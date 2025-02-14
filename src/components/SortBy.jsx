import { useDispatch, useSelector } from "react-redux";
import {
  setSearchFilter,
  setGenreFilter,
  setSortByRating,
} from "../features/books/booksSlice";

function SortBy() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  // Get unique genres from books
  const uniqueGenres = ["all", ...new Set(books.map((book) => book.genre))];

  return (
    <div className="filter-container">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search books..."
          onChange={(e) => dispatch(setSearchFilter(e.target.value))}
          className="search-input"
        />
      </div>

      <div className="filter-section">
        <select
          onChange={(e) => dispatch(setGenreFilter(e.target.value))}
          className="genre-select"
        >
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre === "all" ? "All Genres" : genre}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label className="sort-label">
          <input
            type="checkbox"
            onChange={(e) => dispatch(setSortByRating(e.target.checked))}
          />
          Sort by Rating
        </label>
      </div>
    </div>
  );
}

export default SortBy;
