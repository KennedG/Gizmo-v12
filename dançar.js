const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/b1b6070a86997bd6096b65dd84c5da97/tenor.gif',
  'https://media1.tenor.com/images/93ef89f0e6a7c0d26d9b444769d8c377/tenor.gif?itemid=19525084',
  'https://media1.tenor.com/images/c08493f270134a37ff8f5db1c1c9df15/tenor.gif?itemid=13407487'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dançar!');
}
/*
message.channel.send(`${message.author.username} **acaba de dançar com** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('DANÇA')
        .setColor('RANDOM')
        .setDescription(`${message.author} acaba de dançar com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('para dançar com alguem coloque g!dançar ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}