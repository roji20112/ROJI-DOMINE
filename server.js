const TelegramBot = require('node-telegram-bot-api');

const token = "YOUR_BOT_TOKEN";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const userId = msg.from.id;

  const link = `https://yoursite.com/?id=${userId}`;

  bot.sendMessage(msg.chat.id, `
🔗 هذا رابطك الخاص:

${link}

📌 أي حاجة تصير في الرابط ترجع لك وحدك
  `);
});