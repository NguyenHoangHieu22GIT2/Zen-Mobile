// import { clientSocket } from "@/libs/socket/client-socket.base";
import { Message } from "@/types/message.type";
import { Socket } from "socket.io-client";
export default function useSocketChat(
  conversationId: string,
  addMesage: (message: Message) => void,
  clientSocket: Socket
) {
  clientSocket.on("connect", () => {
    console.log("Connected");
  });
  clientSocket.on("connect_error", (err) => {
    console.log(err);
  });
  clientSocket.on("disconnect", () => {
    console.log("Disconnected");
  });
  //save this as a constant variable
  clientSocket.emit("joinConversation", { conversationId: conversationId });
  clientSocket.on("sendMessage", (message: Message) => {
    addMesage(message);
  });
  const emitMessage = (content: string, endUserId: string) => {
    clientSocket.emit("sendMessage", { content, endUserId, conversationId });
  };
  return { emitMessage };
}
