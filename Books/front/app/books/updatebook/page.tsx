"use client";

import {
  Box,
  CircularProgress,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useBooks } from "@/app/hooks/useBooks";
import { useUpdateBook } from "@/app/hooks/useUpdateBook";
import SelectBook from "@/app/components/SelectBook";
import { BookForm } from "@/app/components/BookForm";
import { ChangeEvent, FormEvent } from "react";

export default function UpdateBook() {
  const { books, selectedBook, handleSelectBook, loading, error } = useBooks();
  const {
    loading: updateLoading,
    error: updateError,
    updatedBook,
    warning,
    handleUpdate,
  } = useUpdateBook(selectedBook);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    e.preventDefault();
    if (selectedBook) {
      handleSelectBook(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleUpdate();
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 2, fontWeight: "bold", textAlign: "center" }}
      >
        Update book
      </Typography>

      {loading && (
        <CircularProgress sx={{ display: "block", margin: "0 auto" }} />
      )}

      {!loading && !error && books.length === 0 && (
        <Typography variant="h6">Books not found</Typography>
      )}

      <SelectBook handleSelectBook={handleSelectBook} />

      {selectedBook && (
        <BookForm
          selectedBook={selectedBook}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={updateLoading}
          warning={warning}
          error={updateError || error}
          updatedBook={updatedBook}
        />
      )}
    </Box>
  );
}
