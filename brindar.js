
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

   var list = [
     'https://images-ext-2.discordapp.net/external/QzYgdHq4-BrZoMcpH1o9HQpHqhIqDswkBmhrgEqfruo/https/i.imgur.com/Pnh7Ri6.gif?width=400&height=225',
'https://images-ext-2.discordapp.net/external/HdesGtnGz32Mylb6wB7AFCq-59mfpZfiKM7R0B_s6Gc/https/i.imgur.com/qXkEHZK.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/rg0HUapY4tXAFfyg3j8LoeuCaa7Vf8HUv86mgTXb2MA/https/i.imgur.com/Lwis0bF.gif',
'https://images-ext-2.discordapp.net/external/qXMl5u9UHaAnZs_xYduvSrW6MjnJqNNNkeFcsRQ4RoU/https/i.imgur.com/COJeuRc.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/9uMRHGnb_rjRmLN1MmBHgx8sBIXV74xqVKZzW0EA3Ww/https/i.imgur.com/ZaFoBkn.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/dES8IQP4xSEu_xG63-rnEHXMPEQiEGirjghUkGnhpoI/https/i.imgur.com/Hsh4W3y.gif?width=400&height=222'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   let user = message.mentions.users.first()

    
    if(!user) {
        return message.channel.send(`${message.author} você quer brindar com quem? o vento? mencione uma pessoa para brindar!`)
    }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#ff58c3')
      .setTitle('<a:Cervejabrinde:911869100081446933>  **BRINDE TODOS SE JUNTEM!**')
      .setDescription(`<a:Cervejabrinde:911869100081446933>  - ${user} o membrx ${message.author} deseja brindar com você. Aceitas?`, avatar)
      .setFooter('Clique no emoji abaixo para aceitar!')

   const embed2 = new Discord.MessageEmbed()
      .setColor('#ff58c3')
      .setDescription(`<:V_CorretoTKF:910509220015788073>  - ${user} aceitou brindar com ${message.author}!`, avatar1)
      .setImage(rand)
      .setFooter('💘 Estou dizendo, aí tem coisa!!!')

   await message.channel.send(embed).then(msg => {
      msg.react('✅')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '✅') {
            return message.channel.send(embed2)
         }
      })
   })
}  