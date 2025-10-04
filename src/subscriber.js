import Redis from "ioredis";
import { sendNotification } from "./notifier.js";

export function startSubscriber() {
  const redis = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
  });

  const channel = process.env.REDIS_CHANNEL || "tasks.completed";

  redis.subscribe(channel, (err) => {
    if (err) {
      console.error("❌ Error al suscribirse al canal:", err);
      return;
    }
    console.log(`✅ Suscrito al canal: ${channel}`);
  });

  redis.on("message", (channel, message) => {
    try {
      const payload = JSON.parse(message);
      sendNotification(payload);
    } catch (err) {
      console.error("❌ Error procesando mensaje:", err.message);
    }
  });
}
