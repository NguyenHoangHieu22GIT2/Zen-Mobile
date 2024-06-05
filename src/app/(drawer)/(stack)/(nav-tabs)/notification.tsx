import { FontText, TopWrapperView } from "@/components";
import NoNotification from "@/components/notification/NoNotification";
import NotificationItemAction from "@/components/notification/NotificationItemAction";
import NotificationItemAnnounce from "@/components/notification/NotificationItemAnnounce";
import { COLORS } from "@/constants";
import useFetchNotifications from "@/hook/notification/useFetchNotifications";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";

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
      <FontText className="font-bold text-2xl mx-3 mt-2 mb-5">
        Notifications
      </FontText>

      <FlatList
        data={notifications}
        keyExtractor={(i) => i._id}
        renderItem={({ item }) => {
          return item.verb === "friend_request" ? (
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
