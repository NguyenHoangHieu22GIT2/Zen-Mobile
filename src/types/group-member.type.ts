import { EndUserMinimal } from "./enduser.type";

type GroupMember = {
  _id: string;
  endUser: EndUserMinimal;
  groupId: string;
};

export { GroupMember };
