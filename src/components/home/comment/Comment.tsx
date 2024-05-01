import FontText from "@/components/common/FontText";
import { IMAGES } from "@/constants";
// import { useState } from "react";
import { View } from "react-native";
import FeedAvatarImage from "../feed/Images/FeedAvatarImage";
import PressableText from "@/components/common/PressableText";
import { Comment as CommentType } from "@/types/comment.type";

type CommentProps = {
  comment: CommentType;
  // replies?: CommentType[];
  onReply?: (commentId: string) => void;
};

export default function Comment({ comment, onReply }: CommentProps) {
  // const [repliesIsOpen, setRepliesIsOpen] = useState(false);
  //TODO: A fetcher for replies of this COmment
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <View className="mb-2">
      <View className="flex-row gap-3">
        <FeedAvatarImage source={IMAGES.fakeavatar} />
        <View className="gap-1 py-2">
          <View className="flex-row">
            <FontText className="font-bold">
              {comment.endUser.username || ""}
            </FontText>
            <FontText> • {createdAt || ""}</FontText>
          </View>
          <FontText>{comment.content || ""}</FontText>
          <PressableText
            className="text-gray-400 text-sm"
            onPress={() => onReply(comment._id)}
          >
            Reply
          </PressableText>
        </View>
      </View>

      {/* {replies.length > 0 && (
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
      )} */}
    </View>
  );
}
