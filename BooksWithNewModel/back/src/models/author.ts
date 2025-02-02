import mongoose, { Schema, Document } from "mongoose";

export interface IAuthor extends Document {
  name: string;
  birthDate: Date;
  nationality: string;
}

const AuthorSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    nationality: { type: String, required: true },
  },
  { timestamps: true }
);

export const Author = mongoose.model<IAuthor>("Author", AuthorSchema);
