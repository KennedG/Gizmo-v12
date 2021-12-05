const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const invite = new Discord.MessageEmbed()
  .setAuthor(`V13 na Replit`, client.user.displayAvatarURL())
  .setDescription(`** Aqui está as informações necessárias para você utilizar [GitHub](https://github.com/KennedG/v13)**`)
  .setImage("https://media.discordapp.net/attachments/911040433545699400/911045789680287764/20211117_102409.gif")
  .setColor("BLUE")
  message.channel.send(invite)
}