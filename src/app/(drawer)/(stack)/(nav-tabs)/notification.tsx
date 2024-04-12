import { TopWrapperView } from "@/components";
import NoNotification from "@/components/notification/NoNotification";
import NotificationItem, {
  NotificationItemProps,
} from "@/components/notification/NotificationItem";
import { IMAGES } from "@/constants";
import { FlatList } from "react-native";

const notifications: NotificationItemProps[] = [
  { message: "", time: "", imageSource: IMAGES.fakeavatar, username: "" },
  { message: "", time: "", imageSource: IMAGES.fakeavatar, username: "" },
];
export default function notification() {
  return (
    <TopWrapperView className="h-full mb-3">
      {notifications.length == 0 ? (
        <NoNotification />
      ) : (
        <FlatList
          data={notifications}
          renderItem={() => (
            <NotificationItem
              imageSource={IMAGES.fakeavatar}
              message=""
              time=""
            />
          )}
        />
      )}
    </TopWrapperView>
  );
}
