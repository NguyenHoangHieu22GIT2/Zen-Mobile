import { FlatList, StatusBar } from "react-native";
import { Feed, TopWrapperView } from "@/components";

export default function Popular() {
  return (
    <TopWrapperView>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <FlatList data={[1, 2, 3, 4]} renderItem={({ item }) => <Feed />} />
    </TopWrapperView>
  );
}
