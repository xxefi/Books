import { Dispatch } from "redux";
import { addBook as addBookService } from "@/app/services/bookService";
import { setLoading, setError, setSuccess, addBook } from "../slices/bookSlice";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "@/app/models/book";

export const addBookAction = (bookData: {
  title: string;
  author: string;
  year: number;
  genre: string;
}): ThunkAction<void, RootState, unknown, PayloadAction<Book>> => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      await addBookService(bookData);
      dispatch(addBook(bookData));
      dispatch(setSuccess("Book added successfully"));
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        dispatch(setError(e.response?.data?.message || "Error occurred"));
      } else if (e instanceof Error) {
        dispatch(setError(e.message));
      } else {
        dispatch(setError("An unknown error occurred"));
      }
    }
  };
};
