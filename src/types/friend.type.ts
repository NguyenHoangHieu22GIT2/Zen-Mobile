import { EndUserSearchMinimal } from "./enduser.type";

type EndUserFriend = {
  _id: string;
  friends: EndUserSearchMinimal[];
};
export { EndUserFriend };
