import { COLORS } from "@/constants";
import { Image, ImageProps, Pressable } from "react-native";

export default function FeedAvatarImage(
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
      className={`w-10 h-10 rounded-full overflow-hidden ${className}`}
    >
      <Image
        source={source}
        className={`rounded-full w-10 h-10`}
        resizeMode="cover"
        {...otherProps}
      />
    </Pressable>
  );
}
