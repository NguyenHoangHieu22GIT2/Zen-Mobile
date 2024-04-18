import { FontText, TopWrapperView } from "@/components";
import NoNotification from "@/components/notification/NoNotification";
import NotificationItem, {
  NotificationItemProps
} from "@/components/notification/NotificationItem";
import { IMAGES } from "@/constants";
import { FlatList } from "react-native";

const notifications: NotificationItemProps[] = [
  {
    message: "liked your post",
    time: "1 hr ago",
    imageSource: IMAGES.fakeavatar,
    username: "John Wick"
  },
  {
    message: "liked your post",
    time: "1 hr ago",
    imageSource: IMAGES.fakeavatar,
    username: "John Wick"
  },
  {
    message: "liked your post",
    time: "1 hr ago",
    imageSource: IMAGES.fakeavatar,
    username: "John Wick"
  }
];
export default function Notification() {
  return (
    <TopWrapperView className="h-full mb-3">
      <FontText className="font-bold text-2xl mx-3 mt-2 mb-5">
        Notifications
      </FontText>
      {notifications.length == 0 ? (
        <NoNotification />
      ) : (
        <FlatList
          data={notifications}
          renderItem={({ item }) => (
            <NotificationItem
              imageSource={item.imageSource}
              message={item.message}
              time={item.time}
              username={item.username}
            />
          )}
        />
      )}
    </TopWrapperView>
  );
}
