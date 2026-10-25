const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'brothersmpmc.aternos.me',
  port: 20388,
  username: '8373',
  auth: 'offline',
  version: false
});

const password = 'krishna779';

bot.on('login', () => {
  console.log('Bot server se connect ho gaya!');
});

bot.once('spawn', () => {
  console.log('Bot spawn ho gaya!');

  setTimeout(() => {
    bot.chat('/register ' + password + ' ' + password);

    setTimeout(() => {
      bot.chat('/login ' + password);
    }, 4000);
  }, 3000);
});

bot.on('kicked', (reason) => {
  console.log('Bot kick hua:', reason);
});

bot.on('end', (reason) => {
  console.log('Bot disconnect hua:', reason);
});

bot.on('error', (err) => {
  console.log('Bot error:', err.message);
});
