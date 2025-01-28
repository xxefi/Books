import { ChangeEvent, useState } from "react";
import { Book } from "@/app/models/book";
import { addBook } from "@/app/services/bookService";
import axios from "axios";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookFailure,
  addBookRequest,
  addBookSuccess,
} from "../redux/actions/bookActions";
import { RootState } from "../redux/store/store";

export const useBookForm = () => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state: RootState) => state.book
  );

  const [formData, setFormData] = useState<Book>({
    title: "",
    author: "",
    year: 0,
    genre: "",
  });

  const handleChange = (
    e:
      | ChangeEvent<
          HTMLInputElement | { name?: string | undefined; value: unknown }
        >
      | SelectChangeEvent<string>
  ) => {
    setFormData({
      ...formData,
      [e.target.name as string]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addBookRequest());

    try {
      await addBook(formData);
      dispatch(addBookSuccess(formData));
      setFormData({ title: "", author: "", year: 0, genre: "" });
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        dispatch(addBookFailure(e.response?.data?.message || ""));
      } else if (e instanceof Error) {
        dispatch(addBookFailure(e.message));
      } else {
        dispatch(addBookFailure(""));
      }
    }
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    onSubmit,
  };
};
