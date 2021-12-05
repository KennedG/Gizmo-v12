const Discord = require("discord.js");

exports.run = (client, message, args) => {

   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você é fraco, lhe falta a permissão de `Administrador` para usar esse comando.')

    message.channel.send(`**Em qual canal vc deseja iniciar?**`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                message.reply(`**Mencione um canal!**`)
      } else {
    message.channel.send(`**Qual o titulo?**`).then(msg3 => {
        let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            title = c.content

    message.channel.send(`**Qual a mensagem desse anuncio?**`).then(msg2 => {
        let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            desc = c.content

    message.channel.send(`**Anúncio enviado ao canal ${canal} com sucesso!**`)

    let embed = new Discord.MessageEmbed()
    .setColor('00BFFF')
    .setThumbnail()
    .setTimestamp()
    .setTitle(title)
    .setDescription(desc)

    canal.send(``, embed)

              })
            })
          })
        })
      }
    })
  })

}