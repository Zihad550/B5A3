import { model, Schema } from "mongoose";
import IBook from "../interfaces/book.interface";
import { BookGenres } from "../constants/book.constant";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: BookGenres,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    copies: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Book = model<IBook>("Book", bookSchema);
export default Book;
