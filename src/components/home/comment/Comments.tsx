import FontText from "@/components/common/FontText";
import { BottomSheetFlatList, BottomSheetView } from "@gorhom/bottom-sheet";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { useState } from "react";
import {
  COMMENTS,
  getCommentFrom,
  getRepliesFrom
} from "@/hook/comment/useDummyCommentDB";

export type CommentType = {
  id: string;
  body: string;
  username: string;
  userId: string;
  parentId?: string;
  createdAt: string;
};

export default function Comments() {
  const [replyingCommentId, setReplyingCommentId] = useState("");
  const handleReplying = (commentId) => {
    setReplyingCommentId(commentId);
  };
  return (
    <>
      <BottomSheetView
        style={{ paddingBottom: 15 }}
        className="flex-row items-center gap-3 border-b border-gray-300 px-5 pt-2 "
      >
        <FontText className="font-bold text-xl">Comments</FontText>
        <FontText>(37)</FontText>
      </BottomSheetView>
      <BottomSheetFlatList
        data={COMMENTS.filter((comment) => comment.parentId == null)}
        keyExtractor={(i) => i.id}
        className="px-4 py-3"
        renderItem={({ item }) => (
          <Comment
            key={item.id}
            comment={item}
            replies={getRepliesFrom(item.id)}
            onReply={handleReplying}
          />
        )}
      />
      <CommentInput
        replyingUser={getCommentFrom(replyingCommentId)}
        onCancelReplying={() => setReplyingCommentId("")}
        //onSend need to check whether replying to someone or not
        onSend={() => {}}
      />
    </>
  );
}
