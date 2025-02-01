import { Book, IBook } from "../models/book";

export class BookService {
  async getAllBooks() {
    return await Book.find();
  }

  async getBookById(id: string) {
    const book = await Book.findOne({ id });
    if (!book) throw new Error("Book not found");
    return book;
  }

  async createBook(bookData: Omit<IBook, "_id">) {
    const existsBook = await Book.findOne({ title: bookData.title });
    if (existsBook) throw new Error("Book with this title already exists");

    const newBook = new Book(bookData);
    return await newBook.save();
  }

  async updateBook(id: string, updatedData: Partial<Omit<IBook, "_id">>) {
    const book = await Book.findOneAndUpdate({ id }, updatedData, {
      new: true,
    });
    if (!book) throw new Error("Book not found");
    return book;
  }

  async removeBook(id: string) {
    const book = await Book.findOneAndDelete({ id });
    if (!book) throw new Error("Book not found");
    return true;
  }
}
