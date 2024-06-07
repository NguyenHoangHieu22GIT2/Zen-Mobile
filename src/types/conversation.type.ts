import { EndUserMinimal } from "./enduser.type";

type Conversation = {
  _id: string;
  endUserIds: EndUserMinimal[];
  name: string;
  createdAt: string;
  updatedAt: string;
};

export { Conversation };
