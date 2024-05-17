type Message = {
  _id: string;
  endUserId: string;
  content: string;
  visibility: "retrieve" | "delete" | "normal";
  createdAt: Date;
};
export { Message };
