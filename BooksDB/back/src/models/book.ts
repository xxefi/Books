import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IBook extends Document {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
}

const BookSchema: Schema = new Schema(
  {
    id: { type: String, default: uuidv4, unique: true },
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
  },
  { timestamps: true }
);

export const Book = mongoose.model<IBook>("Book", BookSchema);
