
const mineflayer = require("mineflayer");

const password = "Krishna779";

const bot = mineflayer.createBot({
  host: "brothersurvival-r84I.aternos.me",
  port: 20388,
  username: "botssss"
});

bot.on("message", (jsonMsg) => {
  const msg = jsonMsg.toString().toLowerCase();

  if (msg.includes("register")) {
    bot.chat(`/register ${password} ${password}`);
  } else if (msg.includes("login")) {
    bot.chat(`/login ${password}`);
  }
});

bot.on("spawn", () => {
  console.log("Bot joined the server!");
});

bot.on("error", (err) => {
  console.log("Error:", err.message);
});

bot.on("end", () => {
  console.log("Bot disconnected.");
});
