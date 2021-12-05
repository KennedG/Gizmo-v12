const Discord = require("discord.js");

 module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "Você não tem permissão para usar esse comando!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Por favor mencione alguém!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`O usuário mencionado não está no canal de voz!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`O usuário foi tirado do canal com sucesso!!`)
  }
}; 