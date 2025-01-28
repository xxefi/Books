"use client";

import { Book } from "@/app/models/book";

export const ADD_BOOK_REQUEST = "ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

export const addBookRequest = () => ({
  type: ADD_BOOK_REQUEST,
});

export const addBookSuccess = (book: Book) => ({
  type: ADD_BOOK_SUCCESS,
  payload: book,
});

export const addBookFailure = (error: string) => ({
  type: ADD_BOOK_FAILURE,
  payload: error,
});
