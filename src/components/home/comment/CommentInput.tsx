import { View, TextInput, Pressable } from "react-native";
import FeedAvatarImage from "../feed/Images/FeedAvatarImage";
import { COLORS, IMAGES } from "@/constants";
import SendSVG from "@/components/svg/SendSVG";
import FontText from "@/components/common/FontText";
import PressableText from "@/components/common/PressableText";
import { useEffect, useRef } from "react";
import { CommentType } from "./Comments";

type CommentInputProps = {
  replyingUser: CommentType;
  onCancelReplying: () => void;
  onSend: () => void;
};

export default function CommentInput({
  replyingUser,
  onCancelReplying,
  onSend
}: CommentInputProps) {
  const textInputRef = useRef<TextInput>();
  useEffect(() => {
    if (replyingUser) textInputRef.current?.focus();
  }, [replyingUser]);

  return (
    <>
      {replyingUser && (
        <View className="flex-row px-5 border-t border-gray-300 pt-2 gap-1 items-center">
          <FontText>Replying to</FontText>
          <FontText className="font-bold">{replyingUser.username}</FontText>
          <PressableText
            className="font-bold text-gray-400"
            onPress={onCancelReplying}
          >
            • Cancel
          </PressableText>
        </View>
      )}

      <View className="flex-row items-center gap-3 px-2 pb-2">
        <FeedAvatarImage source={IMAGES.fakeavatar} />
        <TextInput
          ref={textInputRef}
          className="flex-1  text-lg placeholder:text-gray-300"
          placeholder="Add a comment..."
          selectionColor={COLORS.primary}
          multiline
        />
        <Pressable
          android_ripple={{
            color: "#7b99fd",
            borderless: false,
            foreground: true
          }}
          className="overflow-hidden rounded-xl  pt-3 pb-2.5 pl-2.5 pr-3 "
          onPress={onSend}
        >
          <View>
            <SendSVG width={25} height={25} strokeColor={COLORS.primary} />
          </View>
        </Pressable>
      </View>
    </>
  );
}
