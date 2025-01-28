import { useState } from "react";
import { updateBook } from "@/app/services/bookService";
import { Book } from "@/app/models/book";

export const useUpdateBook = (selectedBook: Book | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedBook, setUpdatedBook] = useState<Book | null>(null);
  const [warning, setWarning] = useState<string | null>(null);

  const handleUpdate = async () => {
    if (!selectedBook) return;

    setLoading(true);
    setError(null);
    setWarning(null);

    try {
      const updatedData = await updateBook(selectedBook.id!, {
        title: selectedBook.title,
        author: selectedBook.author,
        year: selectedBook.year,
        genre: selectedBook.genre,
      });

      setUpdatedBook(updatedData);
      setError(null);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    updatedBook,
    warning,
    handleUpdate,
  };
};
