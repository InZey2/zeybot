const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDY1NjI1MDM0MDE5MzA3NTIw.DiQOoQ.Zc3A0qkgVNc4u-acZsaHJD5vSl4');
