import { useState, useEffect } from "react";
import { getAllBooks, deleteBook } from "@/app/services/bookService";
import { Book } from "@/app/models/book";
import axios from "axios";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllBooks();
      setBooks(data);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.message || "An unknown error occurred");
      } else if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

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
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
      setSuccess("Book successfully deleted");
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

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    selectedBook,
    loading,
    error,
    success,
    fetchBooks,
    handleDelete,
    handleSelectBook,
  };
}
