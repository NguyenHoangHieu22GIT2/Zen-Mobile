import { EndUserMinimal } from "./enduser.type";

type Message = {
  _id: string;
  endUser: EndUserMinimal;
  message: string;
  visibility: "retrieve" | "delete" | "normal";
  createdAt: Date;
};
export { Message };
