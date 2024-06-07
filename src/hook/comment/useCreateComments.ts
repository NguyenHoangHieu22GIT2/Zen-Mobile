import http from "@/libs/axios.base";
import { zAddCommentInputs, ztAddCommentInputs } from "@/libs/zod/comment";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { Comment } from "@/types/comment.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { useState } from "react";

type PropsType = {
  postId: string;
  addComment: (newComment: Comment) => void;
  addReply: (newReply: Comment) => void;
  refreshComments: () => void;
};

export function useCreateComments(props: PropsType) {
  const [isCreating, setIsCreating] = useState(false);
  const [input, setInput] = useState<ztAddCommentInputs>("");
  const [replyingComment, setReplyingComment] = useState<Comment>();
  const endUser = useAuthStore((state) => state.endUser);

  const changeInput = (newInput: string) => {
    setInput(newInput);
  };

  const handleChangeReplyingComment = (comment: Comment) => {
    setReplyingComment(comment);
  };

  const createComment = async (
    replyingCommentId: string,
    input: ztAddCommentInputs
  ) => {
    setIsCreating(true);
    const postId = props.postId;
    const zodResult = zAddCommentInputs.safeParse(input);
    if (!zodResult.success) {
      toast.danger({ message: "Comment must be between 5 and 100 characters" });
      return;
    }
    await trycatchAxios(async () => {
      let result;
      if (replyingCommentId) {
        result = await http.post("comment/", {
          postId,
          content: input,
          parentCommentId: replyingCommentId
        });
        props.addReply({ ...result.data, endUser, hasReplies: false });
        props.refreshComments();
      } else {
        console.log(props.postId);
        result = await http.post("comment/", { postId, content: input });
        props.addComment({ ...result.data, endUser });
      }
      console.log("result", result.data);
      setInput("");
      return result;
    });
    setIsCreating(false);
  };

  return {
    isCreating,
    createComment,
    replyingComment,
    handleChangeReplyingComment,
    input,
    changeInput
  };
}
