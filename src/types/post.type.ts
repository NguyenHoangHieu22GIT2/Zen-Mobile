import { EndUserMinimal } from "./enduser.type";

type Post = {
  _id: string;
  title: string;
  body: string;
  views: number;
  endUserId: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  endUser: EndUserMinimal;
  hasLiked: boolean;
  numOfLikes: number;
  groupId?: string;
};

type PostJson = Post & {
  createdAt: string;
  updatedAt: string;
};

export { Post, PostJson };
