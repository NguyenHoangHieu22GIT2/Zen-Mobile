import Feed from "@/components/home/feed/Feed";
import { COLORS } from "@/constants";
import useFetchGroupPosts from "@/hook/group/useFetchGroupPosts";
import { FlatList, RefreshControl } from "react-native";

type props = {
  ListHeaderComponent: React.ReactNode;
  groupId: string;
};

export default function GroupPosts({ ListHeaderComponent, groupId }: props) {
  const { posts, fetchMorePost, refreshPosts, isRefreshing } =
    useFetchGroupPosts(groupId);
  return (
    <FlatList
      ListHeaderComponent={() => ListHeaderComponent}
      data={posts}
      keyExtractor={(i) => i.toString()}
      renderItem={({ item }) => <Feed post={item} />}
      onEndReached={fetchMorePost}
      onEndReachedThreshold={0.5}
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
  );
}
