type NotificationNoun = {
  _id: string;
  name: string;
  type: "enduser" | "post" | "comment" | "group";
  image?: string;
};

type Notification = {
  _id: string;
  subject: NotificationNoun;
  verb: "comment" | "like" | "friend-request" | "group-member-request";
  directObject?: NotificationNoun;
  indirectObject: NotificationNoun;
  prepObject?: NotificationNoun;
  referenceLink: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
};
export { Notification };
