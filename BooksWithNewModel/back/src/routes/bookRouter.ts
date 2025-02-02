import { Router, Request, Response, NextFunction } from "express";
import { BookService } from "../services/BookService";

export const bookRouter = Router();
const bookService = new BookService();

bookRouter.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Salam dunya",
  });
});

bookRouter.get("/getallbooks", async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
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

bookRouter.get("/bookid/:id", async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
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

bookRouter.post("/addbook", async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json({ success: true, data: newBook });
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
});

bookRouter.put("/bookid/:id", async (req, res) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
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

bookRouter.delete("/bookid/:id", async (req, res) => {
  try {
    await bookService.removeBook(req.params.id);
    res.status(204).send();
  } catch (e: unknown) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});
