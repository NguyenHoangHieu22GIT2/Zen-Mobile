import { EndUserMinimal } from "./enduser.type";

type Conversation = {
  _id: string;
  endUsers: EndUserMinimal[];
};

export { Conversation };
