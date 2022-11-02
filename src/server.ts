import express from "express";
import { routes } from "./routes/message.router";
import "dotenv/config";
import "./bot";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
