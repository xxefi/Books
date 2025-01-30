"use client";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SelectBookProps } from "../interfaces/props/selectbook.props";

export const SelectBook = ({
  books,
  selectedBook,
  handleSelectBook,
  loading,
}: SelectBookProps) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel>Select book</InputLabel>
      <Select
        value={selectedBook ? selectedBook.id : ""}
        onChange={(e) => handleSelectBook(e.target.value)}
        label="Select book"
        disabled={loading}
      >
        <MenuItem value="">
          <em>No select</em>
        </MenuItem>
        {books.map((book) => (
          <MenuItem key={book.id} value={book.id}>
            {book.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
