const Discord = require("discord.js");

exports.run = (client, message, args) => {

let canalsugestão = message.guild.channels.cache.find(ch => ch.id === "910345808845611010");

let naosei0 = new Discord.MessageEmbed()
.setTitle(`<a:sintonia_emoji239:909266143204741181> Sistema de bugs<a:sintonia_emoji239:909266143204741181> `)
.setColor(`#FFFFFF`)
.setDescription(`✔ ${message.author} Olhe a sua **DM** e siga as intruções do bot reportar o bug!`)
.setFooter(`Reaja na reação abaixo para deletar essa mensagem.`)

message.channel.send(`${message.author}`, naosei0).then(msg => {
  msg.react("🗑️")

  const a1 = (reaction, user) => reaction.emoji.name ==='🗑️' && user.id === message.author.id
             const b1 = msg.createReactionCollector(a1, { time: 300000 });

             b1.on("collect", c1 => {
             msg.delete(naosei0)
             c1.remove(message.author.id)
          })
      })

let naosei = new Discord.MessageEmbed()
.setTitle(`<a:verificado:908562051927007242> Sistema de bugs <a:verificado:908562051927007242>  `)
.setDescription(`**Qual é o bug? e qual comando esse bug ocorreu!**`)
.setAuthor(`📑 Pergunta 1`)
.setFooter(`Reaja com 🗑️ para apagar essa mensagem.`)
.setColor(`#FFFFFF`)

message.author.send(`${message.author}`, naosei).then(msg => {
  msg.react("🗑️") //-

  const a1 = (reaction, user) => reaction.emoji.name ==='🗑️' && user.id === message.author.id
             const b1 = msg.createReactionCollector(a1, { time: 300000 });

             b1.on("collect", c1 => {
             msg.delete(naosei)
             c1.remove(message.author.id)
          })
      })






message.author.createDM().then(channel => {
channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
  .on("collect", message => {
    let sugestão = message.content;

    message.author.send(`Bug enviado com sucesso.<a:verificado:908562051927007242>  \n **Agradecemos você usuário por avisar a staff!<a:dana:897138061211758633> ** \n **<a:AlienPlsSlow:908551032827695175> Você usuário que faz o Gizmo crescer!** `)

    let legal = new Discord.MessageEmbed()
    .setTitle(`<a:Desenvolvedor:861997097598844929> Bug reportado por: ${message.author.username}`)
    .addField(`<a:Desenvolvedor:861997097598844929> Bug:`, `\`\`\`${sugestão}\`\`\``)
  
    canalsugestão.send(legal)
    })
    })
    }