import { Book } from "../models/book";

export interface BookItemProps {
  book: Book;
  onDelete: (bookId: string) => void;
  disabled: boolean;
}
