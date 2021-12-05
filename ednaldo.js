  const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    'https://media1.tenor.com/images/7acccc33b25399bff4b41d979835bd73/tenor.gif?itemid=18024842',
    'https://media1.tenor.com/images/62a37dd5340b195ab972fa268d79378e/tenor.gif?itemid=19429642',
    'https://media1.tenor.com/images/b1b83ab983d136bdf3fed71af0b40c0e/tenor.gif?itemid=17528115',
    'https://media1.tenor.com/images/f8e657c9e27388272870ac4f29ca6731/tenor.gif?itemid=17786909',
    'https://media1.tenor.com/images/932a0cf7fdbe85496c45ea3a9701849b/tenor.gif?itemid=17796160',
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`❌ | ${message.author} *Mencione alguém para invocar o ednaldo pereira!*`);

  let ferinha = new Discord.MessageEmbed()
  .setTitle(`😎 **BANIDO** 🥵`)
  .setDescription(`💀 ${message.author} **baniu** ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("ff0000")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`*banido por:* ${message.author.username}`, message.author.displayAvatarURL({format:"png"}));

  message.channel.send(ferinha)
  
  }