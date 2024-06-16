type EndUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  description: string;
};

type EndUserMinimal = Pick<EndUser, "_id" | "username" | "avatar">;
type EndUserSearchMinimal = Pick<
  EndUser,
  "_id" | "username" | "avatar" | "description"
>;
type EndUserProfile = {
  endUser: EndUser;
  isFriend: boolean;
};
type EndUserProfileMinimal = EndUser & {
  isFriend: boolean;
};

export {
  EndUser,
  EndUserMinimal,
  EndUserSearchMinimal,
  EndUserProfile,
  EndUserProfileMinimal
};
