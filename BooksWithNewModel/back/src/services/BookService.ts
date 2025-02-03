import mongoose, { Types } from "mongoose";
import { Author, IAuthor } from "../models/author";
import { Book, IBook } from "../models/book";
import { AuthorService } from "./AuthorService";

export class BookService {
  private authorService: AuthorService;
  constructor() {
    this.authorService = new AuthorService();
  }

  async getAllBooks() {
    return await Book.find().populate("author");
  }

  async getBookById(id: string) {
    const book = await Book.findOne({ id }).populate("author");
    if (!book) throw new Error("Book not found");
    return book;
  }

  async createBook(bookData: Omit<IBook, "_id" | "id">) {
    const existsBook = await Book.findOne({ title: bookData.title });
    if (existsBook) throw new Error("Book with this title already exists");

    const author = await this.authorService.getAuthorByName(
      bookData.author as unknown as string
    );

    const newBook = new Book({
      ...bookData,
      author: author._id,
    });
    return await newBook.save();
  }

  async updateBook(id: string, updatedData: Partial<Omit<IBook, "_id">>) {
    if (updatedData.author && typeof updatedData.author === "string") {
      const author = await this.authorService.getAuthorByName(
        updatedData.author
      );
      updatedData.author = author._id as mongoose.Types.ObjectId;
    }

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
