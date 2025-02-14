import { useSelector, useDispatch } from "react-redux";
import { removeBook, updateRating } from "../features/books/booksSlice";
import "../App.css";

function Result() {
  console.log("Result component mounted");
  const books = useSelector((state) => state.books.books);
  const filters = useSelector((state) => state.books.filters);
  const dispatch = useDispatch();

  console.log("Books in Result: ", books);

  const filteredBooks = books
    .filter((book) => {
      const matchesSearch = book.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesGenre =
        filters.genre === "all" || book.genre === filters.genre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (filters.sortByRating) {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="Addbook">
      {filteredBooks.map((book) => (
        <div key={book.id} className="result">
          <h3>{book.title}</h3>
          <p>{book.genre}</p>
          <p>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() =>
                  dispatch(updateRating({ bookId: book.id, rating: star }))
                }
                style={{
                  cursor: "pointer",
                  color: star <= book.rating ? "#ffd700" : "#e4e5e9",
                }}
              >
                ★
              </span>
            ))}
          </p>
          <button
            className="removeBtn"
            onClick={() => dispatch(removeBook(book.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Result;
