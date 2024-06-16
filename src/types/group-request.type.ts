import { EndUserMinimal } from "./enduser.type";

type JoinGroupRequest = {
  _id: string;
  groupId: string;
  endUserId: EndUserMinimal;
  state: "pending" | "accepted";
};
export { JoinGroupRequest };
