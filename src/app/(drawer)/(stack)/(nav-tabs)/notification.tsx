import { FontText, TopWrapperView } from "@/components";
import NoNotification from "@/components/notification/NoNotification";
import NotificationItemAction from "@/components/notification/NotificationItemAction";
import NotificationItemAnnounce from "@/components/notification/NotificationItemAnnounce";
import { Notification } from "@/types/notification.type";
import { FlatList } from "react-native";

const notifications: Notification[] = [
  {
    _id: "1",
    userSent: {
      _id: "1",
      username: "John Wick",
      avatar: "asd"
    },
    title: "liked your post",
    description: "liked your post",
    typeOfNotification: "announce",
    link: "",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "2",
    userSent: {
      _id: "2",
      username: "John Wick",
      avatar: "asd"
    },
    title: "send you a friend request",
    description: "send you a friend request",
    typeOfNotification: "action",
    link: "",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
export default function Notifications() {
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
          keyExtractor={(i) => i._id}
          renderItem={({ item }) => {
            return item.typeOfNotification === "announce" ? (
              <NotificationItemAnnounce notification={item} />
            ) : (
              <NotificationItemAction
                notification={item}
                onAccept={() => {}}
                onReject={() => {}}
              />
            );
          }}
        />
      )}
    </TopWrapperView>
  );
}
