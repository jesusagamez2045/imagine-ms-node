import "dotenv/config";
import express from "express";
import { startSubscriber } from "./subscriber.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "Node Microservice is running 🚀" });
});

startSubscriber();

app.listen(PORT, () => {
  console.log(`✅ Node microservice listening on http://localhost:${PORT}`);
});
