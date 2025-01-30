import { Book } from "@/app/models/book";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookState {
  book: Book[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: BookState = {
  book: [],
  loading: false,
  error: null,
  success: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
      state.loading = false;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.book.push(action.payload);
      state.success = "Book added successfully";
      state.loading = false;
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.book = action.payload;
    },
  },
});

export const { setLoading, setError, setSuccess, addBook, setBooks } =
  bookSlice.actions;
export default bookSlice.reducer;
