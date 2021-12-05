
const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async(bot, message, args ) => {
   message.delete()

   const { body } = await superagent.get('https://nekos.life/api/v2/img/smug')


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:purple_heart: ****${message.author.username}**** Face`)
      .setImage(body.url)
      .setFooter('Olha a cara do malandro', avatar)

 await message.channel.send(embed)
   
}
