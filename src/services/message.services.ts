import { sendMessage } from "../bot";
import * as messageData from "../data/message.data";
import { Message } from "../interface/message.interface";

export const saveMessage = async (message: Message) => {
  if (message.type === "incoming") sendMessage(message.roomId, message.text);
  return await messageData.saveMessage(message);
};
export const getMessages = async () => {
  return await messageData.getMessage();
};
export const getMessagesById = async (roomId: string) => {
  return await messageData.getMessageById(roomId);
};
