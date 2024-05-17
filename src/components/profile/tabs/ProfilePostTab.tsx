import Feed from "@/components/home/feed/Feed";
import { useFetchRecommendationPosts } from "@/hook/feed/useFetchRecommendationPosts";
import { View, FlatList, Text } from "react-native";

export default function ProfilePostTab({ headerHeight }) {
  const { posts, error, isLoadingMore } = useFetchRecommendationPosts();

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
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        maxToRenderPerBatch={1}
        updateCellsBatchingPeriod={1}
        initialNumToRender={1}
      />
    </View>
  );
}
