import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  filters: {
    search: '',
    genre: 'all',
    sortByRaiting: false
  }
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        title: action.payload.title,
        genre: action.payload.genre,
        rating: 0
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    updateRating: (state, action) => {
      const book = state.books.find(book => book.id === action.payload.bookId);
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
      state.filters.sortByRaiting = action.payload;
    }
  }
});

export const { addBook, removeBook, updateRating, setSearchFilter, setGenreFilter, setSortByRating } = booksSlice.actions;
export default booksSlice.reducer;