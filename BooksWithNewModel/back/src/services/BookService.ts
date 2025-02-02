import { Author } from "../models/author";
import { Book, IBook } from "../models/book";

export class BookService {
  async getAllBooks() {
    return await Book.find().populate("author");
  }

  async getBookById(id: string) {
    const book = await Book.findOne({ id }).populate("author");
    if (!book) throw new Error("Book not found");
    return book;
  }

  async createBook(bookData: Omit<IBook, "_id">) {
    const existsBook = await Book.findOne({ title: bookData.title });
    if (existsBook) throw new Error("Book with this title already exists");

    let author = await Author.findOne({ name: bookData.author });

    if (!author) throw new Error("Author not found");

    const newBook = new Book({
      ...bookData,
      author: author.id,
    });
    return await newBook.save();
  }

  async updateBook(id: string, updatedData: Partial<Omit<IBook, "_id">>) {
    const book = await Book.findOneAndUpdate({ id }, updatedData, {
      new: true,
    }).populate("author");
    if (!book) throw new Error("Book not found");
    return book;
  }

  async removeBook(id: string) {
    const book = await Book.findOneAndDelete({ id });
    if (!book) throw new Error("Book not found");
    return true;
  }
}
