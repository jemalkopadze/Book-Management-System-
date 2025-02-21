import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  filters: {
    search: "",
    genre: "All",
    sortByRating: false,
  },
};

// Allowed genres
const allowedGenres = [
  "fiction",
  "mystery",
  "science Fiction",
  "fantasy",
  "romance",
  "horror",
  "biography",
  "history",
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, genre } = action.payload;

      if (!allowedGenres.includes(genre)) {
        console.warn(`Invalid genre: ${genre}`);
        return;
      }

      const newBook = {
        id: Date.now(),
        title,
        genre,
        rating: 0,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateRating: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload.bookId);
      if (book) {
        book.rating = action.payload.rating;
      }
    },
    setSearchFilter: (state, action) => {
      state.filters.search = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.filters.genre = action.payload;
    },
    setSortByRating: (state, action) => {
      state.filters.sortByRating = action.payload;
    },
  },
});

export const {
  addBook,
  removeBook,
  updateRating,
  setSearchFilter,
  setGenreFilter,
  setSortByRating,
} = booksSlice.actions;
export default booksSlice.reducer;
