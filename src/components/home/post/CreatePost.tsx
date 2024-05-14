import PressableText from "@/components/common/PressableText";
import { View } from "react-native";

export function CreatePost() {
  return (
    <View className="p-3">
      <View></View>
      <View>
        <PressableText>Submit</PressableText>
      </View>
    </View>
  );
}
