type EndUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  description: string;
};

type EndUserMinimal = Pick<EndUser, "_id" | "username" | "avatar">;

export { EndUser, EndUserMinimal };
