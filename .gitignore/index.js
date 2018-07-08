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

client.login('NDY1MjQ5MTE5NTYxMDU2MjU3.DiKxxA.qxZaGU4weFSgH5N5d9znKRsaAW4');
