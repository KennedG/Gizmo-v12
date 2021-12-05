// comando que eu criei a 1 ano, dm em anonimo, se quiser mudar ai pra mostrar qm enviou tal faz vc, bye ;-;
// créditos: kayo#5108

const Discord = require('discord.js')

exports.run = async (bot, msg, args) => {
    var membro = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
        if(!msg.member.permissions.has("ADMINISTRATOR")) {
        return msg.reply('você não tem permissão pra isso')
    }

    if (!membro){
        return msg.reply|('mencione alguém')
    }
    let user = bot.users.cache.get(membro.id)
    var fala = args.slice(1).join(" ");
    if(!fala) return msg.reply(`escreva algo..`)
    
    const msge = await msg.channel.send(":white_check_mark: mensagem enviada com sucesso!")
    msg.delete({timeout: 0})
    const embed = new Discord.MessageEmbed()
    .setTitle(`Alguém te enviou uma mensagem 👉👈😳`)
    .setDescription(fala)
     .setTimestamp()
    user.send(embed).catch(error => {
        if (error == "DiscordAPIError: Cannot send messages to this user") {
            error = "``" +error + "``" + " (usuário não encontrado/dm bloqueada)";
        }
        msge.edit(`${msg.author}` + " --> ocorreu um erro.. \n||" + error + "||");
        console.log(`\n--\ndm.js Erro: ${error}\n--\n`)

    })
}