import { useDispatch } from "react-redux";
import {
  setSearchFilter,
  setGenreFilter,
  setSortByRating,
} from "../features/books/booksSlice";

function SortBy() {
  const dispatch = useDispatch();

  // Static genres list
  const genres = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Horror",
    "Biography",
    "History",
  ];

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
          defaultValue="All"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
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
