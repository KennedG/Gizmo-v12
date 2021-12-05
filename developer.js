const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "addbot",
  category: "hytton",
  run: async (client, message, args) => {

    const filter = m => m.author.id === message.author.id

    let botid_collected = db.get(`botid_collect_${message.author.id}`)
    message.author.send(`<@${message.author.id}>, pra começar insira o ID do seu bot.`).then(async (msg) => {
      const idbotcollect = msg.channel.createMessageCollector(filter, { time: 30000, max: 1 })
      .on('collect', i => {
        let idbot = i.content

        if(isNaN(idbot)) {
          return message.author.send(`<@${message.author.id}>, por favor insira um ID válido.`)
        } else {

          function fetchBots() {
            return new Promise((res, rej) => {
              res(client.users.fetch(idbot))
            })
          }

          fetchBots().then((bot) => {
            if(!bot.bot) {
             message.author.send(`<@${message.author.id}>, este ID não pertence a um bot.`)
            } else {
              message.author.send(`<@${message.author.id}>\nAgora insira a linguagem de programação do seu bot.\nEscolha entre: **\`DBDScript\`** e **\`Discord.js\`**`).then(async (msg2) => {
                const languagecollector = msg2.channel.createMessageCollector(filter, { time: 30000, max: 1 })
                .on('collect', lang => {

                  let langbot = lang.content

                  if(langbot.toLowerCase() === "dbdscript" || langbot.toLowerCase() === "discord.js") {
                    return message.author.send(`<@${message.author.id}>\nPor último insira o prefixo do seu bot.\n**\`(ATT: Pode conter até 2 caractéres)\`**`).then(async (msg3) => {

                      const prefixcollector = msg3.channel.createMessageCollector(filter, { time: 30000, max: 1})
                      .on('collect', pref => {
                        let prefbot = pref.content
                        if(prefbot.length <= 2) {
                          message.author.send(`<@${message.author.id}>, seu Bot foi enviado para a verificação`)

                          const EmbedForm = new MessageEmbed()
                          .setAuthor(client.user.username + " • Add Bot", client.user.displayAvatarURL())
                          .setColor("YELLOW")
                          .setDescription(`O bot **\`${bot.username}#${bot.discriminator}\`** criado por **\`${message.author.tag}\`** foi enviado para a verificação`)
                          .setTimestamp()

                          const EmbedMods = new MessageEmbed()
                          .setAuthor(client.user.username + " • Add Bot", client.user.displayAvatarURL())
                          .setColor("GREEN")
                          .setDescription(
                            [
                              "Tag: " + bot.username+"#"+bot.discriminator,
                              "Linguagem: " + langbot.toUpperCase(),
                              "Prefixo: " + prefbot,
                              "ID: " + bot.id
                            ]
                          )
                          .setFooter(`Enviado por: ${message.author.tag}(${message.author.id})`)

                          client.channels.cache.get("912141640007819294").send(EmbedForm)
                          client.channels.cache.get("912141640007819294").send(EmbedMods)

                        } else [
                          message.author.send(`<@${message.author.id}>, o prefixo contém mais de 2 caratéres`)
                        ]
                      })

                    })
                  } else {
                    return message.author.send(`<@${message.author.id}>, este tipo de programação não está disponível`)
                  }

                })
              })
            }
          }).catch(() => message.author.send("ID Não Existe'"))
        }
      })
    })

  }
}