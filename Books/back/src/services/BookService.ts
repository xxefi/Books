import fs from "fs";
import { Book } from "../models/book";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const FILE_PATH = path.join(__dirname, "../data/books.json");

export class BookService {
  private books: Book[] = [];

  constructor() {
    this.loadBooks();
  }

  private loadBooks(): void {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf-8");
      this.books = JSON.parse(data) || [];
    } else this.books = [];
  }

  private saveBooks(): void {
    fs.writeFileSync(FILE_PATH, JSON.stringify(this.books, null, 2));
  }

  getAllBooks(): Book[] {
    if (this.books.length === 0) throw new Error("No Books found");
    return this.books;
  }

  getBookById(id: string): Book | undefined {
    const book = this.books.find((b) => b.id === id);
    if (!book) throw new Error("Book not found");
    return book;
  }

  createBook(bookData: Omit<Book, "id">): Book {
    const existsBook = this.books.find((b) => b.title === bookData.title);
    if (existsBook) throw new Error("Book with this title already exists");

    const newBook: Book = {
      id: uuidv4(),
      ...bookData,
    };

    this.books.push(newBook);
    this.saveBooks();
    return newBook;
  }

  updateBook(id: string, updatedData: Partial<Omit<Book, "id">>): Book {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) throw new Error("Book not found");

    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...updatedData,
    };
    this.saveBooks();
    return this.books[bookIndex];
  }

  removeBook(id: string): boolean {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) throw new Error("Book not found");

    this.books.splice(bookIndex, 1);
    this.saveBooks();
    return true;
  }
  removeAllBooks(): boolean {
    if (this.books.length === 0) throw new Error("No books to remove");

    this.books = [];
    this.saveBooks();
    return true;
  }
}
