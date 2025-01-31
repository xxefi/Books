"use client";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import { BookFormProps } from "../interfaces/props/bookform.props";
import {
  buttonStyle,
  formControlStyle,
  textFieldStyle,
} from "../styles/BookAddForm.styles";

export const BookAddForm = ({
  formData,
  loading,
  handleChange,
  onSubmit,
}: BookFormProps) => {
  return (
    <form onSubmit={onSubmit} style={{ width: "100%", padding: "20px" }}>
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        required
        sx={textFieldStyle}
      />
      <TextField
        label="Author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        fullWidth
        required
        sx={textFieldStyle}
      />
      <TextField
        label="Year"
        name="year"
        type="number"
        value={formData.year}
        onChange={handleChange}
        fullWidth
        required
        sx={textFieldStyle}
      />
      <FormControl fullWidth sx={formControlStyle}>
        <InputLabel>Genre</InputLabel>
        <Select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        >
          <MenuItem value="Fiction">Fiction</MenuItem>
          <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
          <MenuItem value="Science Fiction">Science Fiction</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Mystery">Mystery</MenuItem>
          <MenuItem value="Biography">Biography</MenuItem>
        </Select>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={buttonStyle}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Add Book"}
      </Button>
    </form>
  );
};
