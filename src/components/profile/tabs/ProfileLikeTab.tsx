import Feed from "@/components/home/feed/Feed";
import { useFetchRecommendationPost } from "@/hook/feed/useFetchRecommendationPost";
import { View, FlatList, Text } from "react-native";

export default function ProfileLikeTab({ headerHeight }) {
  const { posts, error, isLoadingMore } = useFetchRecommendationPost();

  if (isLoadingMore) {
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
    <View className="flex-1 bg-white">
      <FlatList
        onScroll={({ nativeEvent }) => {
          const visibleContentY = nativeEvent.contentOffset.y;
          const HEADER_HEIGHT = 330;
          if (visibleContentY >= 200) {
            headerHeight.value = 0;
          } else if (visibleContentY == 0) {
            headerHeight.value = HEADER_HEIGHT / 2;
          }
        }}
        data={posts}
        renderItem={({ item }) => <Feed post={item} />}
      />
    </View>
  );
}
