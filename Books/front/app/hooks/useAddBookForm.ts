import { ChangeEvent, FormEvent, useState } from "react";
import { Book } from "@/app/models/book";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBookAction } from "../redux/actions/addBookAction";
import { AppDispatch } from "../redux/store";

export const useAddBookForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<Book>({
    title: "",
    author: "",
    year: 0,
    genre: "",
  });

  //const [loading, setLoading] = useState<boolean>(false);
  //const [error, setError] = useState<string | null>(null);
  //const [success, setSuccess] = useState<string | null>(null);

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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addBookAction(formData));
  };

  return {
    formData,
    handleChange,
    onSubmit,
  };
};
