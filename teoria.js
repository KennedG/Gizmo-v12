const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/ba63Jtr.gif',
  'https://imgur.com/iQEXcba.gif',
  'https://imgur.com/OAIaDfh.gif',
  'https://imgur.com/QMrxgfK.gif',
  'https://imgur.com/hdfihMG.gif',
  'https://imgur.com/aG65sbM.gif',
  'https://imgur.com/7YdBPp9.gif',
  'https://imgur.com/Ts5NBOK.gif',
  'https://imgur.com/t0suitM.gif'
];
var rand = list[Math.floor(Math.random() * list.length)];

// Criado por Luquinhaas#7037 | OBS: se tirar a marca d'agua script não vai funcionar!

/*
message.channel.send(`${message.author.username} ** mano tu é ** ${user.username}! `, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Perguntou ao 🤔? ➜')
        .setColor('YELLOW')
        .setDescription(`🤔`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
      message.channel.send(embed);
}