import { FlatList, Pressable, StatusBar } from "react-native";
import { Feed, PlusSVG, TopWrapperView } from "@/components";
import { router } from "expo-router";

export default function Popular() {
  return (
    <TopWrapperView>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <FlatList data={[1, 2, 3, 4]} renderItem={() => <Feed />} />
      <Pressable
        android_ripple={{
          color: "#7b99fd",
          borderless: false,
          foreground: true
        }}
        onPress={() => {
          router.push("/add-post");
        }}
        className="rounded-full p-5 bg-primary overflow-hidden absolute bottom-5 right-5 z-50 shadow-lg"
      >
        <PlusSVG width={25} height={25} />
      </Pressable>
    </TopWrapperView>
  );
}
