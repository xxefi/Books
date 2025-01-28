import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useBooks } from "@/app/hooks/useBooks";

const SelectBook = ({
  handleSelectBook,
}: {
  handleSelectBook: (bookId: string) => void;
}) => {
  const { books, selectedBook, loading } = useBooks();

  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel>Select book</InputLabel>
      <Select
        value={selectedBook?.id || ""}
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

export default SelectBook;
