import { Types } from "mongoose";

const useObjectId = (id: string) => {
  return new Types.ObjectId(id);
};

export default useObjectId;
