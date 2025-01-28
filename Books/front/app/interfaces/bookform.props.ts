import { ChangeEvent, FormEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import { Book } from "../models/book";

export interface BookFormProps {
  formData: Book;
  loading: boolean;
  handleChange: (
    e:
      | ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
      | SelectChangeEvent<string>
  ) => void;
  onSubmit: (e: FormEvent) => void;
}
