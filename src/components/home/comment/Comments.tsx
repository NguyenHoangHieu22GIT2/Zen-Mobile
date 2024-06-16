import FontText from "@/components/common/FontText";
import { BottomSheetFlatList, BottomSheetView } from "@gorhom/bottom-sheet";
import CommentInput from "./CommentInput";
import { useFetchComments } from "@/hook/comment/useFetchComments";
import Comment from "./Comment";
import { useCreateComments } from "@/hook/comment/useCreateComments";
import { RefreshControl } from "react-native";
import { COLORS } from "@/constants";
import { useRef } from "react";
import { useFetchReplies } from "@/hook/comment/useFetchReplies";
import PressableText from "@/components/common/PressableText";
import { PostJson } from "@/types/post.type";

type props = {
  post: PostJson;
};

export default function Comments(props: props) {
  const {
    comments,
    fetchMoreComments,
    refreshComments,
    isRefreshing,
    addComment
  } = useFetchComments({
    postId: props.post._id
  });

  const { replyLists, fetchReplies, addReply } = useFetchReplies();

  const {
    createComment,
    replyingComment,
    handleChangeReplyingComment,
    input,
    changeInput
  } = useCreateComments({
    post: props.post,
    addComment,
    addReply,
    refreshComments
  });

  const flatlistRef = useRef(null);

  return (
    <>
      <BottomSheetView
        style={{ paddingBottom: 15 }}
        className="flex-row items-center justify-start gap-3 border-b border-gray-300 px-5 pt-2 "
      >
        <FontText className="font-bold text-xl">Comments</FontText>
        <FontText>(37)</FontText>
        <PressableText className="ml-40 " onPress={refreshComments}>
          re-
        </PressableText>
      </BottomSheetView>

      <BottomSheetFlatList
        ref={flatlistRef}
        data={comments}
        keyExtractor={(i) => i._id}
        className="px-4 py-3"
        renderItem={({ item }) => {
          if (!item.parentCommentId)
            return (
              <Comment
                replyLists={replyLists}
                key={item._id}
                comment={item}
                replyingComment={replyingComment}
                onReply={(comment) => handleChangeReplyingComment(comment)}
                onShowReplies={(comment) => {
                  fetchReplies(comment);
                }}
              />
            );
        }}
        onEndReached={fetchMoreComments}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl
            colors={[COLORS.primary]}
            refreshing={isRefreshing}
            onRefresh={refreshComments}
          />
        }
      />
      <CommentInput
        replyingUsername={replyingComment?.endUser.username}
        onCancelReplying={() => handleChangeReplyingComment(null)}
        onChangeInput={(value) => changeInput(value)}
        onCreateComment={() => {
          createComment(replyingComment?._id, input);
        }}
      />
    </>
  );
}
