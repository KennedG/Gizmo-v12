const Discord = require('discord.js')
const superagent = require("superagent");

module.exports.run = async(bot, message, args ) => {
   message.delete()

   const { body } = await superagent.get('https://nekos.life/api/v2/img/tickle')

   let user = message.mentions.users.first()

    if(!user) {
        return message.channel.send(`${message.author}, Você tem que mencionar um membro para fazer cócegas!`).then(message => message.delete({timeout: 20000}));
    }
if(user.id == message.author.id) return message.channel.send('Você não pode se fazer **cócegas**!').then(message => message.delete({timeout: 20000}));


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`**<@${message.author.id}> fez cosquinha em <@${user.id}>!**:purple_heart:`)
      .setImage(body.url)
      .setFooter('Clique em 🔁 para retribuir!', user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#ef00ff')
      .setDescription(`:sparkling_heart: **${user.username} ficou irritado(a) e fez cócegas em ${message.author.username}! também**`, avatar1)
      .setFooter('💞', user.displayAvatarURL())
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
