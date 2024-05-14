import ChatSearchBar from "@/components/chat/ChatSearchBar";
import Chats from "@/components/chat/Chats";
import { IMAGES } from "@/constants";
import { useState } from "react";
import { ImageBackground, View } from "react-native";

export default function chat() {
  const [search, setSearch] = useState("");
  return (
    <ImageBackground source={IMAGES.appbackground} className="h-full">
      <ChatSearchBar
        onType={(text) => setSearch(text)}
        className="w-full px-3 mt-2"
      />
      <View className="h-2 " />
      <Chats />
    </ImageBackground>
  );
}
