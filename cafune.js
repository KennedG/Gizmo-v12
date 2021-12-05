const Discord = require("discord.js"); 

exports.run = async(client, message, args) => {
  var list = [
    'https://media.discordapp.net/attachments/863964018368577560/872862096189182032/a62c58fa264cb92a3ba5b2f50446a0541307e528_hq.gif',
    'https://media.discordapp.net/attachments/863964018368577560/872862096956731432/33889bd8c5e3b9dde6b4c43de225fea521ce511a_hq.gif',
    'https://media.discordapp.net/attachments/863964018368577560/872862097481027584/5acf256d2e58322113c5d5664550b6e58a8adb99r1-400-225_hq.gif',
    'https://media.discordapp.net/attachments/863964018368577560/872862097883668490/tenor-2.gif'
  ]; 

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`❌ | ${message.author} Mencione alguém para fazer cafuné!`); 

  let ferinha = new Discord.MessageEmbed()
  .setTitle(`☺ Cafuné 😊`)
  .setDescription(`🤗 ${message.author} fez cafuné em ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`Créditos: Ferinha`, message.author.displayAvatarURL({format:"png"})); 

  message.channel.send(ferinha)
  
  }