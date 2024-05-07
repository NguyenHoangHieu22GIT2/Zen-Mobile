import { EndUserMinimal } from "./enduser.type";

type Comment = {
  _id: string;
  postId: string;
  endUser: EndUserMinimal;
  content: string;
  parentCommentId?: string;
  createdAt: Date;
  updatedAt: Date;
  hasReplies: boolean;
};

export { Comment };
