import { useState, useEffect } from "react";
import { getAllBooks } from "@/app/services/bookService";
import { Book } from "@/app/models/book";
import axios from "axios";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setWarning(null);
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

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    setBooks,
    loading,
    error,
    selectedBook,
    success,
    warning,
    handleSelectBook,
  };
};
