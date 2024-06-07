import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StatusBar,
  View
} from "react-native";
import {
  Feed,
  FloattingButton,
  FontText,
  PlusSVG,
  TopWrapperView
} from "@/components";
import { router } from "expo-router";
import { useFetchRecommendationPosts } from "@/hook/feed/useFetchRecommendationPosts";
import { COLORS } from "@/constants";

export default function Popular() {
  const {
    posts,
    fetchMorePosts,
    error,
    refreshPosts,
    isRefreshing,
    isLoadingMore,
    isReachingEnd
  } = useFetchRecommendationPosts();

  if (error) {
    console.log(error);
    return (
      <View>
        <FontText>{error.message}</FontText>
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
      <View className="w-full h-full bg-gray-100">
        <FlatList
          ItemSeparatorComponent={() => <View className="h-3 " />}
          showsVerticalScrollIndicator={true}
          data={posts}
          renderItem={({ item }) => (
            <Feed post={item} onDelete={refreshPosts} />
          )}
          keyExtractor={(item) => item._id}
          ListFooterComponent={() => (
            <>
              {isLoadingMore && !isReachingEnd && (
                <ActivityIndicator size="small" color={COLORS.primary} />
              )}
              {isReachingEnd && (
                <View className="items-center h-10">
                  <FontText className="text-gray-400 text-xl font-bold">
                    .
                  </FontText>
                </View>
              )}
            </>
          )}
          onEndReached={fetchMorePosts}
          onEndReachedThreshold={0.7}
          extraData={posts}
          refreshControl={
            <RefreshControl
              colors={[COLORS.primary]}
              refreshing={isRefreshing}
              onRefresh={() => {
                refreshPosts();
              }}
            />
          }
        />

        <FloattingButton
          onPress={() => {
            router.push("/post/create");
          }}
          icon={<PlusSVG width={25} height={25} />}
        />
      </View>
    </TopWrapperView>
  );
}
