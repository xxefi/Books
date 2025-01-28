import { Router, Request, Response, NextFunction } from "express";
import { BookService } from "../services/BookService";

export const router = Router();
const bookService = new BookService();

router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Salam dunya",
  });
});

router.get("/getallbooks", (req: Request, res: Response) => {
  try {
    const books = bookService.getAllBooks();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (e) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});

router.get("/bookid/:id", (req: Request, res: Response) => {
  try {
    const book = bookService.getBookById(req.params.id);
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (e: unknown) {
    if (e instanceof Error)
      res.status(400).json({
        success: false,
        message: e.message,
      });
  }
});

router.post("/addbook", (req: any, res: any) => {
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newBook = bookService.createBook({
      title,
      author,
      year: Number(year),
      genre,
    });
    res.status(201).json({
      success: true,
      data: newBook,
    });
  } catch (e: unknown) {
    if (e instanceof Error)
      res.status(400).json({
        success: false,
        message: e.message,
      });
  }
});

router.put("/bookid/:id", (req: any, res: any) => {
  try {
    const updatedBook = bookService.updateBook(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: updatedBook,
    });
  } catch (e: unknown) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});

router.delete("/bookid/:id", (req: Request, res: Response) => {
  try {
    bookService.removeBook(req.params.id);
    res.status(204).send();
  } catch (e: unknown) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});

router.delete("/allbooks", (req: Request, res: Response) => {
  try {
    bookService.removeAllBooks();
    res.status(204).send();
  } catch (e: unknown) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});

router.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});
