import { useState } from "react";
import { deleteBook } from "@/app/services/bookService";
import { Book } from "@/app/models/book";
import axios from "axios";
import { useBooks } from "../hooks/useBooks";

export const useRemoveBooks = () => {
  const { books, setBooks } = useBooks();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSelectBook = (bookId: string) => {
    const book = books.find((b) => b.id === bookId);
    setSelectedBook(book || null);
  };

  const handleDelete = async (bookId: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await deleteBook(bookId);
      setSuccess("Book successfully deleted");
      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== bookId));
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "");
      } else if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    books,
    selectedBook,
    loading,
    error,
    success,
    handleDelete,
    handleSelectBook,
  };
};
