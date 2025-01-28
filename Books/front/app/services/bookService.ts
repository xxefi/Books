import axios from "axios";

export const API_URL = "http://localhost:3000/api/v1/books";

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/getallbooks`);
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getBookById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/bookid/${id}`);
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const addBook = async (book: {
  title: string;
  author: string;
  year: number;
  genre: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/addbook`, book, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const updateBook = async (
  id: string,
  updateBook: {
    title?: string;
    author?: string;
    year?: number;
    genre?: string;
  }
) => {
  try {
    const response = await axios.put(`${API_URL}/bookid/${id}`, updateBook, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteBook = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/bookid/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};
