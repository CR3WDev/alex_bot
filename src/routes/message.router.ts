import express, { Request, Response } from "express";
import { Message } from "../interface/message.interface";
import * as messageService from "../services/message.services";

export const routes = express.Router();

routes.post("/message", async (req: Request, res: Response) => {
  const message: Message = req.body;
  await messageService.saveMessage(message);
  return res.send({ message });
});
routes.get("/message", async (req: Request, res: Response) => {
  const messages: Array<Message> = await messageService.getMessages();
  res.status(200).json({ messages });
});
routes.get("/message/:roomId", async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const messages: Array<Message> = await messageService.getMessagesById(roomId);
  res.status(200).json({ messages });
});
