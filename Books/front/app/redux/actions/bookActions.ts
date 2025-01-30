import { Dispatch } from "redux";
import { setLoading, setError, setBooks } from "../slices/bookSlice";
import { getAllBooks, getBookById } from "@/app/services/bookService";
import { AxiosError } from "axios";

export const fetchBooks = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const books = await getAllBooks();
      dispatch(setBooks(books));
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        dispatch(
          setError(e.response?.data?.message || "Failed to fetch books")
        );
      } else if (e instanceof Error) {
        dispatch(setError(e.message));
      } else {
        dispatch(setError("An unknown error occurred"));
      }
    }
  };
};

export const fetchBookById = (bookId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const book = await getBookById(bookId);
      dispatch(setBooks([book]));
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        dispatch(
          setError(e.response?.data?.message || "Failed to fetch book by ID")
        );
      } else if (e instanceof Error) {
        dispatch(setError(e.message));
      } else {
        dispatch(setError("An unknown error occurred"));
      }
    }
  };
};
