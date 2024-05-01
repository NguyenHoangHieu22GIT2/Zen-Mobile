import { FlatList, RefreshControl, StatusBar, View } from "react-native";
import {
  Feed,
  FloattingButton,
  FontText,
  PlusSVG,
  TopWrapperView
} from "@/components";
import { router } from "expo-router";
import { useFetchRecommendationPost } from "@/hook/feed/useFetchRecommendationPost";
import { COLORS } from "@/constants";
import { useState } from "react";

export default function Popular() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { posts, fetchMorePosts, error, refreshPosts } =
    useFetchRecommendationPost();

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
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({ item }) => <Feed post={item} />}
          keyExtractor={(item) => item._id}
          onEndReached={fetchMorePosts}
          onEndReachedThreshold={0.7}
          extraData={posts}
          refreshControl={
            <RefreshControl
              colors={[COLORS.primary]}
              refreshing={isRefreshing}
              onRefresh={() => {
                setIsRefreshing(true);
                refreshPosts();
                setIsRefreshing(false);
              }}
            />
          }
        />

        <FloattingButton
          onPress={() => {
            router.push("/add-post");
          }}
          icon={<PlusSVG width={25} height={25} />}
        />
      </View>
    </TopWrapperView>
  );
}
