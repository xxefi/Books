import { Request, Response } from "express";
import { AuthorService } from "../services/AuthorService";

export class AuthorController {
  private authorService = new AuthorService();

  // Получить всех авторов
  public async getAllAuthors(req: Request, res: Response): Promise<void> {
    try {
      const authors = await this.authorService.getAllAuthors();
      res.status(200).json({
        success: true,
        data: authors,
      });
    } catch (e) {
      if (e instanceof Error) {
        res.status(404).json({
          success: false,
          message: e.message,
        });
      }
    }
  }

  // Получить автора по ID
  public async getAuthorById(req: Request, res: Response): Promise<void> {
    try {
      const author = await this.authorService.getAuthorById(req.params.id);
      res.status(200).json({
        success: true,
        data: author,
      });
    } catch (e) {
      if (e instanceof Error) {
        res.status(404).json({
          success: false,
          message: e.message,
        });
      }
    }
  }

  // Добавить нового автора
  public async addAuthor(req: Request, res: Response): Promise<void> {
    try {
      const newAuthor = await this.authorService.createAuthor(req.body);
      res.status(201).json({ success: true, data: newAuthor });
    } catch (e) {
      if (e instanceof Error) {
        res.status(400).json({ success: false, message: e.message });
      }
    }
  }

  // Обновить автора
  public async updateAuthor(req: Request, res: Response): Promise<void> {
    try {
      const updatedAuthor = await this.authorService.updateAuthor(
        req.params.id,
        req.body
      );
      res.status(200).json({
        success: true,
        data: updatedAuthor,
      });
    } catch (e) {
      if (e instanceof Error) {
        res.status(404).json({
          success: false,
          message: e.message,
        });
      }
    }
  }

  // Удалить автора
  public async deleteAuthor(req: Request, res: Response): Promise<void> {
    try {
      await this.authorService.removeAuthor(req.params.id);
      res.status(204).send();
    } catch (e) {
      if (e instanceof Error) {
        res.status(404).json({
          success: false,
          message: e.message,
        });
      }
    }
  }
}
