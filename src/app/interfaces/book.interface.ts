import { Model, Types } from "mongoose";

export default interface IBook {
  title: string;
  author: string;
  genre: TBookGenre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export type TBookGenre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface IBookModel extends Model<IBook> {
  isExists(id: string): Promise<IBook | null>;
  markAsUnavailable(id: Types.ObjectId): Promise<void>;
}
