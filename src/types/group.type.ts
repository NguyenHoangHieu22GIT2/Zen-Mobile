import { EndUserMinimal } from "./enduser.type";

//for lists
type Group = {
  _id: string;
  name: string;
  description: string;
  avatar: string;
  isVisible: boolean;
  numberOfMembers: number;
  isMember: boolean;
  createdAt: string;
};
type GroupMinimal = Pick<Group, "_id" | "name" | "avatar" | "isVisible">;
type GroupDetail = Group & {
  members: EndUserMinimal[];
  isOwner: boolean;
};
export { Group, GroupDetail, GroupMinimal };
