//Creditos: Pedro.#1760
//Creditos: Pedro.#1760 
const Discord = require('discord.js');

module.exports = {

    name:"addcargo",
    category:"Utilidades",
    aliases: [''],
}

module.exports.run = (client, message, args) => {


        const user = message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        message.delete();
        if (!message.guild.me.hasPermission('MENAGE_ROLES')) return message.inlineReply("Não tenho permissão!")
        if(!message.member.hasPermission('MENAGE_ROLES')) return message.inlineReply('Você não tem permissão de usar este comando!')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        
     const pedroerro1 = new Discord.MessageEmbed()

       .setDescription("Menciona um membro para setar o cargo.")
       .setColor("RANDOM")

       if (!args[0]) return message.channel.send(pedroerro1)
       let msg = args.join(' ')

 

      const pedroerro2 = new Discord.MessageEmbed()

      .setDescription("Menciona um cargo que deseja setar no membro.")
      .setColor("RANDOM")

      if (!role) return message.channel.send(pedroerro2)
    
     const member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();

    const pedroaddcargo = new Discord.MessageEmbed()
     .setTitle("<:az_moderador_old:909264644168900629> | Gerenciamento de Cargos")
     .addField(`👤 Usuario Mencionado`, `${member.user}`)
     .addField(`👉 Cargo`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

     user.roles.add(role);
   
    message.channel.send(pedroaddcargo)

};
//Creditos: Pedro.#1760
//Creditos: Pedro.#1760
