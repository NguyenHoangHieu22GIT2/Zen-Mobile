import JoinGroupRequestItem from "@/components/group/items/JoinGroupRequestItem";
import useJoinGroupRequestController from "@/hook/group/useJoinGroupRequestController";
import { useLocalSearchParams } from "expo-router";
import { View, FlatList } from "react-native";

export default function joinGroupRequests() {
  const { id } = useLocalSearchParams();
  const {
    joinGroupRequests,
    acceptJoinGroupRequest,
    declineJoinGroupRequest,
    error,
    isLoading
  } = useJoinGroupRequestController(id as string);
  if (error || isLoading) return <></>;
  return (
    <View className="bg-white h-full">
      <FlatList
        data={joinGroupRequests.filter((i) => i.state === "pending")}
        keyExtractor={(i) => i._id}
        renderItem={({ item }) => (
          <JoinGroupRequestItem
            joinGroupRequest={item}
            onAccept={() => acceptJoinGroupRequest(item.endUserId._id)}
            onDecline={() => {
              declineJoinGroupRequest(item.endUserId._id);
            }}
          />
        )}
      />
    </View>
  );
}
