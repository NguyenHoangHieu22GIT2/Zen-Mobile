import ConversationSearchBar from "@/components/conversation/inputs/ConverationSearchBar";
import Conversations from "@/components/conversation/lists/Conversations";
import { IMAGES } from "@/constants";
import { useState } from "react";
import { ImageBackground, View } from "react-native";

export default function chat() {
  const [search, setSearch] = useState("");

  return (
    <ImageBackground source={IMAGES.appbackground} className="h-full">
      <ConversationSearchBar
        onType={(text) => setSearch(text)}
        className="w-full px-3 mt-2"
      />
      <View className="h-2 " />
      <Conversations />
    </ImageBackground>
  );
}
