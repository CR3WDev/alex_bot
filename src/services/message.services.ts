import * as messageData from "../data/message.data";
import { Message } from "../interface/message.interface";

export const saveMessage = async (message: Message) => {
  return await messageData.saveMessage(message);
};
export const getMessages = async () => {
  return await messageData.getMessage();
};
