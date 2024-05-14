import { EndUserMinimal } from "./enduser.type";

type Notification = {
  _id: string;
  userSent: EndUserMinimal;
  title: string;
  description: string;
  typeOfNotification: "action" | "announce";
  link: string;
  createdAt: Date;
  updatedAt: Date;
};
export { Notification };
