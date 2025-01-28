"use client";

import { FormEvent, useState } from "react";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import { useBookById } from "@/app/hooks/useBookById";
import BookDetailsCard from "@/app/components/BookDetailsCard";

export default function GetBookById() {
  const [bookId, setBookId] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { book, loading, error, fetchBookById } = useBookById();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    await fetchBookById(bookId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 3,
        margin: "0 auto",
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          textAlign: "center",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Search Book by ID
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Book ID"
          variant="outlined"
          fullWidth
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          sx={{
            marginBottom: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#fff",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading || !bookId}
          fullWidth
          sx={{
            marginBottom: 3,
            textTransform: "none",
            fontWeight: "bold",
            backgroundColor: "#007BFF",
            ":hover": { backgroundColor: "#0056b3" },
            borderRadius: 2,
          }}
        >
          Search
        </Button>
      </form>

      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{
            marginBottom: 3,
            backgroundColor: "#ffebee",
            color: "#d32f2f",
          }}
        >
          {error}
        </Alert>
      )}

      {!loading && !error && submitted && !book && (
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#777",
            fontStyle: "italic",
          }}
        >
          No book found
        </Typography>
      )}

      {!loading && !error && book && <BookDetailsCard book={book} />}
    </Box>
  );
}
