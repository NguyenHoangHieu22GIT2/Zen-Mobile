import http from "@/libs/axios.base";
import { Comment } from "@/types/comment.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import { useState } from "react";

export function useFetchReplies() {
  const [replyLists, setReplyLists] = useState<Comment[]>([]);
  const addReply = (newReply: Comment) => {
    setReplyLists([...replyLists, newReply]);
  };
  const fetchReplies = async (comment: Comment) => {
    trycatchAxios(async () => {
      const result = await http.get(
        `/comment?limit=100&skip=0&postId=${comment.postId}&parentCommentId=${comment._id}`
      );
      setReplyLists([...replyLists, ...result.data]);
      return result;
    });
  };

  return {
    fetchReplies,
    replyLists,
    addReply
  };
}
