import http from "@/libs/axios.base";
import { Notification } from "@/types/notification.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";

const createNotification = async (
  notification: Pick<
    Notification,
    | "subject"
    | "verb"
    | "directObject"
    | "indirectObject"
    | "prepObject"
    | "referenceLink"
  >
) => {
  return trycatchAxios(async () => {
    const result = await http.post("/notification", notification);
    return result.data;
  });
};
export { createNotification };
