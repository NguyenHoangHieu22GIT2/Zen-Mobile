import FriendRequestItem from "@/components/friend-request/items/FriendRequestItem";
import useFriendRequestController from "@/hook/friend-request/useFriendRequestController";
import { View, FlatList } from "react-native";

export default function friendsRequests() {
  const {
    friendRequests,
    isLoading,
    error,
    acceptFriendRequest,
    declineFriendRequest
  } = useFriendRequestController();
  if (error || isLoading) return <></>;
  return (
    <View className="bg-white h-full">
      <FlatList
        data={friendRequests.filter((i) => i.state === "pending")}
        keyExtractor={(i) => i._id}
        renderItem={({ item }) => (
          <FriendRequestItem
            friendRequest={item}
            onAccept={() => acceptFriendRequest(item._id)}
            onDecline={() => {
              declineFriendRequest(item._id);
            }}
          />
        )}
      />
    </View>
  );
}
