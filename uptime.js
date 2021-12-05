const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `<:CalendarioTKF:913600530322976838>  ${days.toFixed()} dias\n<:CalendarioTKF:913600530322976838>  ${hours.toFixed()} horas\n<:CalendarioTKF:913600530322976838>  ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setColor("2c00fd")
    .setDescription(` <a:hype:859296488479391764>| STATUS DO BOT

**Status**
<:on:913601902153981962>  Online
**Estou online há: **\n${uptime}

**<a:developer:912914634846109706> Criador<a:developer:912914634846109706> **
<@493282797222494230><:emoji_41:910474334986985502> 
**Linguagem**

JavaScript<:nodejs:913580954860269659> 

<:az_moderador_old:909264644168900629> **Servers**
<:az_moderador_old:909264644168900629> Gerenciando: ${client.guilds.cache.size} servers.

<a:hype:897139138661351434> **Canais**
<a:hype:897139138661351434> Gerenciando: ${client.channels.cache.size} canais.

<:branco_pessoaRDM:908562579117453342> **Usuários  gerais**
<:branco_pessoaRDM:908562579117453342> Gerenciando: ${client.users.cache.size} Usuários.`)

  message.channel.send(embed);
};