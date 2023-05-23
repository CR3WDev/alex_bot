import "dotenv/config";
import express from "express";
import "./bot";
import { routes } from "./routes/message.router";
const cors = require("cors");

const PORT = 6432;
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const server = app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
export const io = require("socket.io")(server);

io.on("connection", (socket: any) => {
  console.log("Connected Successfully", socket.id);
});
