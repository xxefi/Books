"use client";

import { Box, Typography, CircularProgress, Alert, List } from "@mui/material";
import { useBooks } from "@/app/hooks/useBooks";
import { BookItem } from "@/app/components/BookItem";

export default function RemoveBook() {
  const { books, loading, error, success, handleDelete } = useBooks();

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 2, textAlign: "center", fontWeight: "bold" }}
      >
        Remove Book
      </Typography>

      {loading && (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      )}

      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          {success}
        </Alert>
      )}

      {!loading && !error && books.length === 0 && (
        <Typography variant="h6">No books found</Typography>
      )}

      {!loading && !error && books.length > 0 && (
        <List>
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={handleDelete}
              disabled={loading}
            />
          ))}
        </List>
      )}
    </Box>
  );
}
