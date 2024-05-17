import { COLORS } from "@/constants";
import { View, Pressable, TextInput } from "react-native";
import SendSVG from "../../svg/SendSVG";
import { useState } from "react";

type props = {
  onSubmit: (text) => void;
};

export default function MessageInput({ onSubmit }: props) {
  const [input, setInput] = useState("");
  return (
    <View className="flex-row items-center gap-3 px-2 py-1.5 bg-white">
      <TextInput
        className="flex-1  text-lg placeholder:text-gray-400 rounded-2xl bg-gray-100 px-4 py-2 "
        placeholder="Add a comment..."
        selectionColor={COLORS.primary}
        value={input}
        multiline
        onChangeText={(value) => setInput(value)}
      />
      <Pressable
        android_ripple={{
          color: "#7b99fd",
          borderless: false,
          foreground: true
        }}
        className="overflow-hidden rounded-xl  pt-3 pb-2.5 pl-2.5 pr-3 "
        onPress={() => {
          onSubmit(input);
          setInput("");
        }}
      >
        <View>
          <SendSVG width={25} height={25} strokeColor={COLORS.primary} />
        </View>
      </Pressable>
    </View>
  );
}
