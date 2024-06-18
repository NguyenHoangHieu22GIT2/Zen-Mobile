import FontText from "@/components/common/FontText";
import { COLORS, IMAGES } from "@/constants";
import { Pressable, View } from "react-native";
import FeedAvatarImage from "../feed/Images/FeedAvatarImage";
import PressableText from "@/components/common/PressableText";
import { Comment as CommentType } from "@/types/comment.type";
import { useState } from "react";

type CommentProps = {
  comment: CommentType;
  replyLists: CommentType[];
  onReply: (comment: CommentType) => void;
  onShowReplies: (comment: CommentType) => void;
  replyingComment: CommentType;
};

export default function Comment({
  comment,
  onReply,
  onShowReplies,
  replyLists,
  replyingComment
}: CommentProps) {
  const isBeingReplied = replyingComment?._id === comment._id;
  const [repliesIsOpen, setRepliesIsOpen] = useState(!comment.hasReplies);

  const replies = replyLists.filter(
    (reply) => reply.parentCommentId === comment._id
  );

  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <View className={`mb-2 `}>
      <View
        className={`flex-row gap-3 ${
          isBeingReplied && "bg-lightblack/10 rounded-xl p-1"
        }`}
      >
        <FeedAvatarImage
          source={
            comment.endUser.avatar.length > 8
              ? {
                  uri:
                    process.env.EXPO_PUBLIC_HTTP_UPLOADS +
                    comment.endUser.avatar
                }
              : IMAGES.fakeavatar
          }
        />
        <View className="gap-1 py-2">
          <View className="flex-row">
            <FontText className="font-bold">
              {comment.endUser?.username || ""}
            </FontText>
            <FontText> • {createdAt || ""}</FontText>
          </View>
          <FontText>{comment.content || ""}</FontText>
          {repliesIsOpen || !comment.hasReplies ? (
            <PressableText
              className="text-gray-400 text-sm"
              onPress={() => onReply(comment)}
            >
              Reply
            </PressableText>
          ) : (
            <View className="h-2" />
          )}
        </View>
      </View>

      {comment.hasReplies && (
        <>
          {!repliesIsOpen ? (
            <Pressable
              android_ripple={{
                color: COLORS.gray2,
                borderless: false,
                foreground: true
              }}
              className="overflow-hidden ml-16"
              onPress={() => {
                setRepliesIsOpen(true);
                onShowReplies(comment);
              }}
            >
              <FontText className="font-bold">Show replies...</FontText>
            </Pressable>
          ) : (
            <View className="ml-10">
              {replies.map((reply) => (
                <Comment
                  key={reply._id}
                  comment={reply}
                  replyLists={replyLists}
                  replyingComment={replyingComment}
                  onReply={(reply) => onReply(reply)}
                  onShowReplies={(reply) => onShowReplies(reply)}
                />
              ))}
            </View>
          )}
        </>
      )}
    </View>
  );
}
