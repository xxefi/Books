import { useState } from "react";
import { getBookById } from "@/app/services/bookService";
import { Book } from "@/app/models/book";
import { AxiosError } from "axios";

export function useBookById() {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBookById = async (bookId: string) => {
    setLoading(true);
    setError(null);
    setBook(null);

    try {
      const data = await getBookById(bookId);
      setBook(data);
    } catch (e: unknown) {
      if (e instanceof AxiosError && e.response?.data?.message) {
        setError(e.response.data.message);
      } else if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("");
      }
    } finally {
      setLoading(false);
    }
  };

  return { book, loading, error, fetchBookById };
}
