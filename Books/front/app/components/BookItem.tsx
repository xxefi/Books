import { Button, ListItem, ListItemText } from "@mui/material";
import { BookItemProps } from "../interfaces/bookitem.props";

export function BookItem({ book, onDelete, disabled }: BookItemProps) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ListItemText
        primary={book.title}
        secondary={`Author: ${book.author} | Year: ${book.year}`}
      />
      <Button
        variant="contained"
        color="error"
        sx={{ textTransform: "none" }}
        onClick={() => onDelete(book.id!)}
        disabled={disabled}
      >
        Delete
      </Button>
    </ListItem>
  );
}
