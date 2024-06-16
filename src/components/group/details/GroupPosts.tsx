import Feed from "@/components/home/feed/Feed";
import useFetchGroupPosts from "@/hook/group/useFetchGroupPosts";
import { FlatList } from "react-native";

type props = {
  ListHeaderComponent: React.ReactNode;
  groupId: string;
};

export default function GroupPosts({ ListHeaderComponent, groupId }: props) {
  const { posts, mutate } = useFetchGroupPosts(groupId);
  return (
    <FlatList
      ListHeaderComponent={() => ListHeaderComponent}
      data={posts}
      keyExtractor={(i) => i._id}
      renderItem={({ item }) => <Feed post={item} />}
      onEndReached={() => mutate()}
      onEndReachedThreshold={0}
    />
  );
}
