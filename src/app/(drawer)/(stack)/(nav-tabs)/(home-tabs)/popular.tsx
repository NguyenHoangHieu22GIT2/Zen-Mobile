import { FlatList, StatusBar } from "react-native";
import { Feed, FloattingButton, PlusSVG, TopWrapperView } from "@/components";
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
      <FloattingButton
        onPress={() => {
          router.push("/add-post");
        }}
        icon={<PlusSVG width={25} height={25} />}
      />
    </TopWrapperView>
  );
}
