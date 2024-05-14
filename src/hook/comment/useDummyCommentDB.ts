import { CommentType } from "@/components/home/comment/Comments";

export const COMMENTS: CommentType[] = [
  {
    id: "1",
    body: "First comment",
    username: "Jack",
    userId: "1",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00"
  },
  {
    id: "2",
    body: "First comment",
    username: "Jack",
    userId: "1",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00"
  },
  {
    id: "3",
    body: "Second comment",
    username: "Jack",
    userId: "1",
    parentId: "1",
    createdAt: "2021-08-16T23:00:33.010+02:00"
  },
  {
    id: "4",
    body: "Third comment",
    username: "Jack",
    userId: "1",
    parentId: "3",
    createdAt: "2021-08-16T23:00:33.010+02:00"
  },
  {
    id: "5",
    body: "Third comment",
    username: "Jack",
    userId: "1",
    parentId: "3",
    createdAt: "2021-08-16T23:00:33.010+02:00"
  }
];

export const getRepliesFrom = (commentId: string) => {
  return COMMENTS.filter((comment) => comment.parentId == commentId);
};
export const getCommentFrom = (commentId: string) => {
  return COMMENTS.find((comment) => comment.id == commentId);
};
