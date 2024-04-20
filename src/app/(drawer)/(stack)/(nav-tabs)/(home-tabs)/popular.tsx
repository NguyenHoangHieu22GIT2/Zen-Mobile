import { FlatList, StatusBar, Text, View } from "react-native";
import { Feed, FloattingButton, PlusSVG, TopWrapperView } from "@/components";
import { router } from "expo-router";
import { useFetchRecommendationPost } from "@/hook/feed/useFetchRecommendationPost";

export default function Popular() {
  const { data, error, isLoading } = useFetchRecommendationPost();

  if (isLoading) {
    return (
      <View>
        <Text>isLoading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
  return (
    <TopWrapperView>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <FlatList data={data} renderItem={({ item }) => <Feed post={item} />} />
      <FloattingButton
        onPress={() => {
          router.push("/add-post");
        }}
        icon={<PlusSVG width={25} height={25} />}
      />
    </TopWrapperView>
  );
}
