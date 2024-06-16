import { EndUserMinimal } from "./enduser.type";

type Group = {
  _id: string;
  name: string;
  description: string;
  avatar: string;
  endUserId: string;
  isVisible: boolean;
  createdAt: string;
};
type GroupMinimal = Pick<Group, "_id" | "name" | "avatar" | "isVisible">;
type GroupExtraIsmember = Group & { numOfMembers: number; isJoined: boolean };
type GroupDetail = {
  group: Group;
  isJoined: boolean;
  numOfMembers: number;
};
type YourGroupExtendedData = {
  groupsJoined: { _id: string; groupId: Group }[];
  groupsCreated: (Group & { endUser: EndUserMinimal })[];
};
type GroupMember = EndUserMinimal & { isOwner: boolean };
export {
  Group,
  GroupDetail,
  GroupExtraIsmember,
  GroupMinimal,
  GroupMember,
  YourGroupExtendedData
};
