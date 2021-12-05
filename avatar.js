//npm i discord-buttons
//Qualquer erro me marque @Daviih#0001

const Discord = require("discord.js");
const disbut = require("discord-buttons");

module.exports = {
  name:"avatar",
  category:"discord",
  aliases: [''],
  run: async (client, message, args) => {

 let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 let avatar = user.avatarURL({ dynamic: true, format: "png", size: 2048 });

 let embed = new Discord.MessageEmbed() 

    .setTitle(`🖼️ | Avatar de ${user.tag}`)
    .setDescription(`Clique no botão abaixo para baixar a imagem.`)
    .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 })) 
    .setFooter(`Comando usado por ${message.author.tag}`)
    .setColor("#00cfff")

    const button = new disbut.MessageButton()
  .setStyle('url') 
  .setURL(avatar) 
  .setLabel('Download do Avatar');
 
message.channel.send(`${message.author}`, {
   buttons: [button],
   embed
}) 
}}