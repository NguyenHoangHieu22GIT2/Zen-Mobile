import { FontText, PressableText, TopWrapperView } from "@/components";
import NoNotification from "@/components/notification/NoNotification";
import NotificationItemAction from "@/components/notification/NotificationItemAction";
import NotificationItemAnnounce from "@/components/notification/NotificationItemAnnounce";
import { COLORS } from "@/constants";
import useFetchNotifications from "@/hook/notification/useFetchNotifications";
import { router } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View
} from "react-native";

export default function Notifications() {
  const {
    notifications,
    fetchMoreNotifications,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    refreshNotifications
  } = useFetchNotifications();

  return (
    <TopWrapperView className="h-full mb-3">
      <View className="flex-row justify-between mx-3 mt-2 mb-5">
        <FontText className="font-bold text-2xl">Notifications</FontText>
        <PressableText
          className=" text-lg  text-blue-500"
          onPress={() => {
            router.push("/friend-request");
          }}
        >
          Friend requests
        </PressableText>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(i) => i._id}
        renderItem={({ item }) => {
          return item.verb === "" ? (
            <NotificationItemAction
              notification={item}
              onAccept={() => {}}
              onReject={() => {}}
            />
          ) : (
            <NotificationItemAnnounce notification={item} />
          );
        }}
        ListEmptyComponent={<NoNotification />}
        onEndReachedThreshold={0.1}
        onEndReached={fetchMoreNotifications}
        refreshControl={
          <RefreshControl
            colors={[COLORS.primary]}
            refreshing={isRefreshing}
            onRefresh={() => {
              refreshNotifications();
            }}
          />
        }
        ListFooterComponent={
          isLoadingMore &&
          !isReachingEnd && (
            <ActivityIndicator size="small" color={COLORS.primary} />
          )
        }
      />
    </TopWrapperView>
  );
}
