import FontText from "@/components/common/FontText";
import { COLORS, IMAGES } from "@/constants";
import { useState } from "react";
import { Pressable, View } from "react-native";
import FeedAvatarImage from "../feed/Images/FeedAvatarImage";
import PressableText from "@/components/common/PressableText";
import { CommentType } from "./Comments";
import { getRepliesFrom } from "@/hook/comment/useDummyCommentDB";

type CommentProps = {
  comment: CommentType;
  replies: CommentType[];
  onReply: (commentId: string) => void;
};

export default function Comment({ comment, replies, onReply }: CommentProps) {
  const [repliesIsOpen, setRepliesIsOpen] = useState(false);
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <View className="mb-2">
      <View className="flex-row gap-3">
        <FeedAvatarImage source={IMAGES.fakeavatar} />
        <View className="gap-1 py-2">
          <View className="flex-row">
            <FontText className="font-bold">{comment.username}</FontText>
            <FontText> • {createdAt}</FontText>
          </View>
          <FontText>{comment.body}</FontText>
          <PressableText
            className="text-gray-400 text-sm"
            onPress={() => onReply(comment.id)}
          >
            Reply
          </PressableText>
        </View>
      </View>

      {replies.length > 0 && (
        <>
          {!repliesIsOpen ? (
            <Pressable
              android_ripple={{
                color: COLORS.gray2,
                borderless: false,
                foreground: true
              }}
              className="overflow-hidden ml-16"
              onPress={() => setRepliesIsOpen(true)}
            >
              <FontText className="font-bold">Show replies...</FontText>
            </Pressable>
          ) : (
            <View className="ml-10">
              {replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  replies={getRepliesFrom(reply.id)}
                  onReply={() => onReply(reply.id)}
                />
              ))}
            </View>
          )}
        </>
      )}
    </View>
  );
}
