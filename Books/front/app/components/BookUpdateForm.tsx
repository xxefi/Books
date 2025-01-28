import { TextField, Button, Alert } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";
import { Book } from "@/app/models/book";

export const BookUpdateForm = ({
  selectedBook,
  handleChange,
  handleSubmit,
  loading,
  warning,
  error,
  updatedBook,
}: {
  selectedBook: Book;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  loading: boolean;
  warning: string | null;
  error: string | null;
  updatedBook: Book | null;
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={selectedBook.title}
          onChange={handleChange}
          name="title"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          value={selectedBook.author}
          onChange={handleChange}
          name="author"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Year"
          variant="outlined"
          fullWidth
          value={selectedBook.year}
          onChange={handleChange}
          name="year"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Genre"
          variant="outlined"
          fullWidth
          value={selectedBook.genre}
          onChange={handleChange}
          name="genre"
          sx={{ marginBottom: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ textTransform: "none", background: "black" }}
          disabled={loading}
        >
          Update book
        </Button>
      </form>

      {warning && (
        <Alert severity="warning" sx={{ marginTop: 2 }}>
          {warning}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}

      {updatedBook && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
          Book updated successfully
        </Alert>
      )}
    </>
  );
};
