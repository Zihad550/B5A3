import { model, Schema } from "mongoose";
import IBook, { IBookModel } from "../interfaces/book.interface";
import { BookGenres } from "../constants/book.constant";

const bookSchema = new Schema<IBook, IBookModel>(
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
      unique: true,
    },
    copies: {
      type: Number,
      required: true,
      min: 0,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

bookSchema.statics.isExists = async function (id: string) {
  return await this.findById(id);
};

bookSchema.statics.markAsUnavailable = async function (id: string) {
  await this.findOneAndUpdate({ _id: id }, { available: false });
};

const Book = model<IBook, IBookModel>("Book", bookSchema);
export default Book;
