import { COLORS } from "@/constants";
import { Pressable, Image, ImageProps } from "react-native";

export default function ConversationItemAvatarImage(
  props: { onPress?: () => void } & ImageProps
) {
  const { className, source, onPress, ...otherProps } = props;
  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={onPress}
      className={`w-14 h-14 rounded-full overflow-hidden ${className}`}
    >
      <Image
        source={source}
        className={`rounded-full w-14 h-14`}
        resizeMode="cover"
        {...otherProps}
      />
    </Pressable>
  );
}
