export interface Message {
  id?: string;
  roomId: string;
  sender: string;
  text: string;
  type: string;
  time?: Date;
}
