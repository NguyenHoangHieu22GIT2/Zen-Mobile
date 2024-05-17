import { EndUserMinimal } from "./enduser.type";

type Group = {
  _id: string;
  name: string;
  description: string;
  avatar: string;
  isVisible: boolean;
  createdAt: string;
};
type GroupMinimal = Pick<Group, "_id" | "name" | "avatar" | "isVisible">;
type GroupExtraIsmember = Group & { isMember: boolean };
type GroupDetail = GroupExtraIsmember & {
  isOwner: boolean;
  numberOfMembers: number;
};
type GroupMember = EndUserMinimal & { isOwner: boolean };
export { Group, GroupDetail, GroupExtraIsmember, GroupMinimal, GroupMember };
