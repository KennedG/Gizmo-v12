const Discord = require('discord.js');

module.exports = {
  name: 'dado',
  aliases: ['dd'],

run: async(client, message, args) => {
 let dado = [`1`, `2`, `3`, `4`, `5`, `6`]
 let roll = dado[Math.floor(Math.random() * dado.length)];

 let embed = new Discord.MessageEmbed()
 .setTitle(`**Alguém jogou um dado!**`)
 .setDescription(`**Usuário que jogou o dado:** ${message.author}\n **ele jogou o dado e caiu no número:** \`${roll}\``)
 .setColor('RANDOM')
 .setImage('')
 .setThumbnail('')
 .setFooter(`Comando executado por: ${message.author}`)

 message.channel.send(embed)
 }
}