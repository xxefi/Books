import { Router, Request, Response } from "express";
import { AuthorService } from "../services/AuthorService";

export const authorRouter = Router();
const authorService = new AuthorService();

authorRouter.get("/getallauthors", async (req: Request, res: Response) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.status(200).json({
      success: true,
      data: authors,
    });
  } catch (e) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});

authorRouter.get("author/:id", async (req: Request, res: Response) => {
  try {
    const author = await authorService.getAuthorById(req.params.id);
    res.status(200).json({
      success: true,
      data: author,
    });
  } catch (e) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});

authorRouter.post("/addauthor", async (req: Request, res: Response) => {
  try {
    const newAuthor = await authorService.createAuthor(req.body);
    res.status(201).json({ success: true, data: newAuthor });
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
});

authorRouter.put("author/:id", async (req: Request, res: Response) => {
  try {
    const updatedAuthor = await authorService.updateAuthor(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      data: updatedAuthor,
    });
  } catch (e) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});

authorRouter.delete("author/:id", async (req: Request, res: Response) => {
  try {
    await authorService.removeAuthor(req.params.id);
    res.status(204).send();
  } catch (e) {
    if (e instanceof Error)
      res.status(404).json({
        success: false,
        message: e.message,
      });
  }
});
