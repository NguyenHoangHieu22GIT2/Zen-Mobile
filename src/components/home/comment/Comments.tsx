import FontText from "@/components/common/FontText";
import { BottomSheetFlatList, BottomSheetView } from "@gorhom/bottom-sheet";
import CommentInput from "./CommentInput";
import { useEffect, useState } from "react";
import { getCommentFrom } from "@/hook/comment/useDummyCommentDB";
import { useFetchComments } from "@/hook/comment/useFetchComments";
import { Comment as CommentType } from "@/types/comment.type";
import Comment from "./Comment";

type props = {
  postId: string;
};

export default function Comments(props: props) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const { data } = useFetchComments({ postId: props.postId });
  const [replyingCommentId, setReplyingCommentId] = useState("");
  // const handleReplying = (commentId) => {
  //   setReplyingCommentId(commentId);
  // };

  function onChangeComments(newComments: CommentType) {
    setComments([...comments, newComments]);
  }

  useEffect(() => {
    setComments(data);
  }, [data]);
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
        data={comments}
        keyExtractor={(i) => i._id}
        className="px-4 py-3"
        renderItem={({ item }) => <Comment key={item._id} comment={item} />}
      />
      <CommentInput
        replyingUser={getCommentFrom(replyingCommentId)}
        onCancelReplying={() => setReplyingCommentId("")}
        //onSend need to check whether replying to someone or not
        postId={props.postId}
        onChangeComments={onChangeComments}
      />
    </>
  );
}
