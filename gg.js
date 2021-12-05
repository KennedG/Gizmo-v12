const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const invite = new Discord.MessageEmbed()
  .setAuthor(`GG`, client.user.displayAvatarURL())
  .setDescription(`** <:yes:911046834678538260> GG <:yes:911046834678538260> **`)
  .setImage("")
  .setColor("BLUE")
  message.channel.send(invite)
}