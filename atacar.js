const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

   var list = [
       'https://loritta.website/assets/img/actions/attack/generic/gif_5.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_63.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_30.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_107.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_80.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_24.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_45.gif'
];
    var list1 = [
      'https://loritta.website/assets/img/actions/attack/generic/gif_5.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_63.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_30.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_107.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_80.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_24.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_45.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

    
    if(!user) {
        return message.channel.send(`${message.author} você tem que mencionar um membro para atacar!`)
    }

if(user.id == message.author.id) return message.channel.send('Você não pode se fazer **Atacar**!')


   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#F44887')
      .setDescription(`🥊 **${message.author.username} atacou ${user.username}!**`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir!', bot.user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#F44887')
      .setDescription(`😡 **${user.username} retribuiu o ataque de ${message.author.username}!**`, avatar1)
      .setFooter('Ataque 💪', user.displayAvatarURL())
      .setImage(rand1)

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