import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IAuthor extends Document {
  id: string;
  name: string;
  birthDate: Date;
  nationality: string;
}

const AuthorSchema: Schema = new Schema(
  {
    id: { type: String, default: uuidv4, unique: true },
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    nationality: { type: String, required: true },
  },
  { timestamps: true }
);

export const Author = mongoose.model<IAuthor>("Author", AuthorSchema);
