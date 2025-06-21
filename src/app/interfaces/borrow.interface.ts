import { Types } from "mongoose";
import IBook from "./book.interface";

export default interface IBorrow {
  book: Types.ObjectId | IBook;
  quantity: number;
  dueDate: Date;
}
