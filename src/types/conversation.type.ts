import { EndUserMinimal } from "./enduser.type";

type Conversation = {
  _id: string;
  endUserIds: string[];
  name: string;
  createdAt: string;
  updatedAt: string;
};

export { Conversation };
