import { FontText } from "@/components";
import UserFriendItem from "@/components/profile/items/UserFriendItem";
import useFetchUserFriends from "@/hook/profile/useFetchUserFriends";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { useLocalSearchParams } from "expo-router";
import { View, FlatList } from "react-native";

export default function friends() {
  const { id } = useLocalSearchParams();
  const myEndUserId = useAuthStore((state) => state.endUser._id);
  const { friends, error, removeFriend, mutate } = useFetchUserFriends(
    id as string
  );
  if (error) return <></>;
  return (
    <View className="bg-white h-full">
      {friends?.length === 0 && (
        <View>
          <FontText>No friends</FontText>
        </View>
      )}
      <FlatList
        data={friends}
        keyExtractor={(i) => i._id}
        renderItem={({ item }) => (
          <UserFriendItem
            endUser={item}
            isYourFriends={id === myEndUserId}
            onUnfriend={() => {
              removeFriend(item._id);
              mutate();
            }}
          />
        )}
      />
    </View>
  );
}
