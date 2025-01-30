"use client";

import { Box, CircularProgress, Typography, Alert, Grid } from "@mui/material";
import { useBooks } from "@/app/hooks/useBooks";
import { BookCard } from "@/app/components/BookCard";

export default function GetAllBooks() {
  const { books, loading, error } = useBooks();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 3,
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontWeight: "bold",
        }}
      >
        All Books
      </Typography>

      {loading && (
        <CircularProgress
          sx={{
            display: "block",
            margin: "0 auto",
            color: "#ff9800",
          }}
        />
      )}

      {error && (
        <Alert
          severity="error"
          sx={{
            marginBottom: 2,
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            color: "#ff0000",
          }}
        >
          {error}
        </Alert>
      )}

      {!loading && !error && books.length === 0 && (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#ffcc00",
          }}
        >
          No books found
        </Typography>
      )}

      {!loading && !error && books.length > 0 && (
        <Grid container spacing={3} justifyContent="center">
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
