//chat
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const hora = new Date();
  hora.setHours(hora.getHours() - 3);
  const reason = args.join(' ');
  //Mensagem no Chat
  const embed = new Discord.MessageEmbed()
  .setTitle(`<a:sintonia_emoji239:909266143204741181> Veja, alguém está querendo me adicionar em um Servidor<a:sintonia_emoji239:909266143204741181> `)
  .setColor([255,182,193])
  .setDescription(`<a:verificado:908562051927007242> Irei mandar o meu invite em sua DM!.<a:verificado:908562051927007242> `)
  .setFooter(`Convite Solicitado por: ${message.author.tag}`)
  message.channel.send(embed);

//DM
const privado = new Discord.MessageEmbed()
  .setTitle(`**Olá, Sou o <a:coroa:898814229640019968> Gizmo. Me adicione em seu Servidor! ❤**`)
  .setColor([255,182,193])
  .setDescription(`<:badgePartner:909263598788968478> Link de convite:<:badgePartner:909263598788968478>  https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8 `)
  .setFooter(`Atenciosamente Gizmo. BOT DO KENNED`)
  .setThumbnail(client.user.displayAvatarURL())
  message.author.send(privado);
};