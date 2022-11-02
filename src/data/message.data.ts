import { PrismaClient } from "@prisma/client";
import { Message } from "../interface/message.interface";

const prisma = new PrismaClient();

export const saveMessage = async (message: Message) => {
  return await prisma.message.create({
    data: {
      roomId: message.roomId,
      sender: message.sender,
      type: message.type,
      text: message.text,
    },
  });
};
export const getMessage = async () => {
  return await prisma.message.findMany({
    orderBy: [
      {
        time: "asc",
      },
    ],
  });
};
export const getMessageById = async (roomId: string) => {
  return await prisma.message.findMany({
    where: {
      roomId,
    },
    orderBy: [
      {
        time: "asc",
      },
    ],
  });
};
