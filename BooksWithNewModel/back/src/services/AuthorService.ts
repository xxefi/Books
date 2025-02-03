import { Author, IAuthor } from "../models/author";

export class AuthorService {
  async getAllAuthors() {
    return await Author.find();
  }
  async getAuthorById(id: string) {
    const author = await Author.findOne({ id });
    if (!author) throw new Error("Author not found");
    return author;
  }

  async getAuthorByName(name: string) {
    const author = await Author.findOne({ name });
    if (!author) throw new Error("Author not found");
    return author;
  }

  async createAuthor(authorData: Omit<IAuthor, "_id">) {
    const existsAuthor = await Author.findOne({ name: authorData.name });
    if (existsAuthor) throw new Error("Author with this name already exists");

    const newAuthor = new Author(authorData);
    return await newAuthor.save();
  }

  async updateAuthor(id: string, updatedData: Partial<Omit<IAuthor, "_id">>) {
    const author = await Author.findOneAndUpdate({ id }, updatedData, {
      new: true,
    });
    if (!author) throw new Error("Author not found");
    return author;
  }

  async removeAuthor(id: string) {
    const author = await Author.findOneAndDelete({ id });
    if (!author) throw new Error("Author not found");
    return true;
  }
}
