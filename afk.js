const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  
const status = new db.table("AFKs");
let afk = await status.fetch(message.author.id);
    
let embed1 = new Discord.MessageEmbed()
.setColor('#000001')
.setDescription(`**${message.author.tag}** entrou em AFK. \nPara sua conveniência o afk será desativado quando você falar no chat \n **Motivo:** \`${args.join(" ") ? args.join(" ") : "AFK"}\``)
status.set(message.author.id, args.join(" ") || `AFK`);
if (!afk) return message.channel.send(embed1);

else {

    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
}