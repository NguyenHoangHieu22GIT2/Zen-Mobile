import { EndUserMinimal } from "./enduser.type";

type FriendRequest = {
  _id: string;
  endUser: EndUserMinimal;
  state: "pending" | "accepted";
  createdAt: Date;
};
export { FriendRequest };
