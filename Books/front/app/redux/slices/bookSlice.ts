"use client";

import { Book } from "@/app/models/book";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookState {
  books: Book[];
  selectedBook: Book | null;
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  selectedBook: null,
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
    setSelectedBook(state, action: PayloadAction<Book | null>) {
      state.selectedBook = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setBooks, setSelectedBook, setLoading, setError } =
  bookSlice.actions;

export default bookSlice.reducer;
