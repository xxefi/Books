"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import { useBooks } from "@/app/hooks/useBooks";
import { useUpdateBook } from "@/app/hooks/useUpdateBook";
import { SelectBook } from "@/app/components/SelectBook";
import { ChangeEvent, FormEvent } from "react";
import { BookUpdateForm } from "@/app/components/BookUpdateForm";
import { Book } from "@/app/models/book";

export default function UpdateBook() {
  const {
    books,
    selectedBook,
    handleSelectBook,
    loading,
    error,
    success,
    warning,
  } = useBooks();
  const {
    loading: updateLoading,
    error: updateError,
    warning: updateWarning,
    success: updateSuccess,
    updatedFields,
    handleUpdate,
    handleFieldChange,
  } = useUpdateBook(selectedBook);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleFieldChange(name as keyof Book, value);
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

      <SelectBook
        books={books}
        selectedBook={selectedBook}
        loading={loading}
        handleSelectBook={handleSelectBook}
      />

      {selectedBook && (
        <BookUpdateForm
          selectedBook={selectedBook}
          updatedFields={updatedFields}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={updateLoading || loading}
          warning={updateWarning || warning}
          error={updateError || error}
          success={updateSuccess || success}
        />
      )}
    </Box>
  );
}
