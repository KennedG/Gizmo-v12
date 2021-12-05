 const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async(bot, message, args ) => {

   const { body } = await superagent.get('https://nekos.life/api/v2/img/kiss')

   let user = message.mentions.users.first()

    if(!user) {
        return message.reply(`${message.author}, Você tem que mencionar um membro para dar um kiss!`).then(message => message.delete({timeout: 20000}));
    }
if(user.id == message.author.id) return message.channel.send('Você não pode se **beijar**,que amor próprio em...').then(message => message.delete({timeout: 20000}));


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#000000')
      .setDescription(` 💋 **${message.author.username} beijou ${user.username}!**`, avatar)
      .setImage(body.url)
      .setFooter('Clique em 🔁 para retribuir! Comando programado por ! Kenned#0001', bot.user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#000000')
      .setDescription(`👄**${user.username} retribuiu o beijo de ${message.author.username}!**`, avatar1)
      .setFooter('Kiss!  Comando programado por ! Kenned#0001', user.displayAvatarURL())
      .setImage(body.url)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2)
         }
      })
   });
} 