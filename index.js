
const mineflayer = require("mineflayer");

const password = process.env.BOT_PASSWORD || "krishnanna";

const bot = mineflayer.createBot({
  host: "brothersurvival-r84I.aternos.me",
  port: 20388,
  username: "botss"
});

bot.on("message", (jsonMsg) => {
  const msg = jsonMsg.toString().toLowerCase();

  if (msg.includes("register")) {
    bot.chat(`/register ${password} ${password}`);
    console.log("Register command sent");
  } else if (msg.includes("login")) {
    bot.chat(`/login ${password}`);
    console.log("Login command sent");
  }
});

bot.on("spawn", () => {
  console.log("Bot joined the server!");
});

bot.on("error", (err) => {
  console.log("Bot error:", err.message);
});

bot.on("end", () => {
  console.log("Bot disconnected.");
});
