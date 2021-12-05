const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send("Você não possui permissão para enviar mensagens no privado das pessoas.");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send("Você não mencionou um usuário ou forneceu uma identificação inválida");
    if (!args.slice(1).join(" "))
      return message.channel.send("Você não especificou sua mensagem");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("Você não pode enviar uma mensagem no privado desse jogador."))
      .then(() => message.channel.send(`${message.author} sua mensagem foi enviada com sucesso para ${user.user.tag}`));
      message.delete().catch(O_o => {});
}

exports.help = {
    name: "dm"
}