const Discord = require ('discord.js')

module.exports = {
    name: "addroleall",
    usage: "addroleall [cargo]",
    exemple: "addroleall @Membro",
    description: "Adicione um cargo a todos os membros do servidor",
    aliases: ["addroleall", "addcargoall"],
    permissions: "Gerenciar Cargos",
    run: async (client, message, args) => {

    let role = message.mentions.roles.first();
    if(!role) return message.channel.send({embed: { title: `Ocorreu um erro`  , description: `${message.author} Você deve informar um cargo válido para eu poder adicionar nos membros!`, color: "#ff0000"}});
    
    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: { title: `Ocorreu um erro`  , description: `${message.author} Você não possui a permissão de \`Gerenciar Cargos\` para executar este comando`, color: "#ff0000"}});
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: { title: `Ocorreu um erro`  , description: `${message.author} Eu não tenho a permissão de \`Gerenciar Cargos\` para executar este comando`, color: "#ff0000"}});
    
    message.channel.send(`${message.author} o cargo ${role} foi adicionado em todos os membros do servidor `);

    message.guild.members.cache.forEach(member => {
    member.roles.add(role.id).catch(e => console.error(e));
        })
    }
} 