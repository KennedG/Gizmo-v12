const Discord = require('discord.js');

module.exports = {

    name: "convite", 

    aliases: ["invite"], 

    run: async(client, message, args) => {

    let titulo = "" //titulo da Embed
    let link = "" //link do servidor

    const embed = new Discord.MessageEmbed()
    .setTitle(`${titulo}`)
    .setColor("PINK")
    .setDescription(`\n**Convite do nosso Discord: ${discord.gg/4GqYYkcj65}**\n`)

    message.reply({ embeds: [embed] });

    }

}