const discord = require('discord.js')

module.exports.run = async(client, message, args) => {
let nome = new discord.MessageEmbed()
.setTitle(`<:badgePartner:909263598788968478>  | Me adicione em seu servidor.`)
.setDescription(`**Para me adicionar em seu servidor** [Clique Aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)`)
.setTimestamp()
.setColor('BLACK')
message.channel.send(nome)
}