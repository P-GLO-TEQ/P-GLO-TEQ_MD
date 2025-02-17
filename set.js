// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟓-𝟐𝟎𝟑𝟎 𝐏-𝐆𝐋𝐎-𝐓𝐄𝐐*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pair.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘ-ɢʟᴏ-ᴛᴇǫ*"; // Input Yours custom...(Maintain font for Flow)
global.myDb = "https://giftedmd.giftedtech.web.id"; // DO NOT Change this...
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...


 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || false, // Make true to use Antidelete for Chats, Groups, Statuses & Channels
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI || "❣️", //Input Yours custom...
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "ˢᵗᵃᵗᵘˢ ᵛⁱᵉʷᵉᵈ ᵇʸ ᵖᵃʳˢˡᵉʸ ᵍˡᵒᵇᵃˡ ᵗᵉᶜʰⁿᵒˡᵒᵍⁱᵉˢ!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "263779715613", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐀𝐑𝐒𝐋𝐄𝐘 𝐆𝐋𝐎𝐁𝐀𝐋 𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐈𝐄𝐒 ᴷᵃᵐᵘⁿʸᵃʳᵒ ᵗᵉᶜʰ ᶜᵒᵐᵖᵃⁿʸ", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏-𝐆𝐋𝐎-𝐓𝐄𝐐", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐏-𝐆𝐋𝐎-𝐓𝐄𝐐", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || "P",
VERSION: process.env.VERSION || "1.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 ℂ𝔸𝕃𝕃 ℝ𝔼𝕁𝔼ℂ𝕋𝔼𝔻 𝔹𝕐 ℙ𝔸ℝ𝕊𝕃𝔼𝕐 𝔾𝕃𝕆𝔹𝔸𝕃 𝕋𝔼ℂℍℕ𝕆𝕃𝕆𝔾𝕀𝔼𝕊. 📵 N̶O̶ C̶A̶L̶L̶S̶ A̶L̶L̶O̶W̶E̶D̶!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏-𝐆𝐋𝐎-𝐓𝐄𝐐", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://img93.pixhost.to/images/1251/560411912_skyzopedia.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "PARSLEY GLOBAL TECH COMPANY CREATING THE BEST FOR THE WORLD",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Zimbabwe", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
