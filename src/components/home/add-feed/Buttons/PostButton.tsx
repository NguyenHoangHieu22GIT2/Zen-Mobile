import FontText from "@/components/common/FontText";
import { Pressable, PressableProps } from "react-native";

export default function PostButton(props: PressableProps) {
  return (
    <Pressable
      android_ripple={{
        borderless: false,
        foreground: true
      }}
      onPress={() => {}}
      className="overflow-hidden px-4 py-2 rounded-full"
      {...props}
    >
      <FontText className=" font-bold text-gray-600">Post</FontText>
    </Pressable>
  );
}
