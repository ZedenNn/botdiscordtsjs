const { Client } = require('discord.js');
const client = new Client({disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send('@everyone, salut à tous !', {disableEveryone: false});
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), salut à tous !');
});

client.login('NjIxNTA0NjQ2ODI1MTE1NjUy.XXmTYw.sesoq_l0T-tW-C5MZbG3I3WvlFA');