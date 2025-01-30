import { useState } from "react";
import { updateBook } from "@/app/services/bookService";
import { Book } from "@/app/models/book";

export const useUpdateBook = (selectedBook: Book | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [updatedBook, setUpdatedBook] = useState<Book | null>(null);
  const [updatedFields, setUpdatedFields] = useState<Partial<Book>>({});

  const handleFieldChange = (name: keyof Book, value: string) => {
    setUpdatedFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!selectedBook) return;

    setLoading(true);
    setError(null);
    setWarning(null);
    setSuccess(null);

    const hasChanges = Object.keys(updatedFields).some(
      (key) =>
        updatedFields[key as keyof Book] !== selectedBook[key as keyof Book]
    );

    if (!hasChanges) {
      setWarning("No changes detected");
      setLoading(false);
      return;
    }

    try {
      const updatedData = await updateBook(selectedBook.id!, updatedFields);
      setUpdatedBook(updatedData);
      setError(null);
      setSuccess("Book updated successfully");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    warning,
    success,
    updatedBook,
    updatedFields,
    handleUpdate,
    handleFieldChange,
  };
};
