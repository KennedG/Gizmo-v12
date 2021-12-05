const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/WNATkl3.png',
  'https://imgur.com/2bbNRSL.gif',
  'https://imgur.com/tjTHfml.gif',
  'https://imgur.com/L6cINiJ.png',
  'https://i.imgur.com/Vj0db2L.jpeg',
  'https://i.imgur.com/Q32DhLt.png',
  'https://i.imgur.com/VJSqWRg.png',
  'https://i.imgur.com/fqZXfSk.png',
  'https://i.imgur.com/Kgr2H6K.gif',
  'https://i.imgur.com/2puyFXx.jpeg',
  'https://2.bp.blogspot.com/-tj5FMOI5lJA/U0Lz7zeUVeI/AAAAAAAAB5E/3juk8Qrzmog/s1600/An%25C3%25A3o+%252836%2529.JPG',
  'https://s2.glbimg.com/lLynAe-ma8TaDf2hVoiEFZG2iM4=/0x0:780x687/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/B/f/C7s7mOT1Aq3gPMjQ2WSg/anao.jpeg',
  'https://i.ytimg.com/vi/MfXQY90GYIk/maxresdefault.jpg',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para traficar um anão!');
}

//by 8or //by 8or //by 8or//by 8or//

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('<:yes:911046834678538260> trafico de anões<:yes:911046834678538260> ')
        .setColor('RANDOM')
        .setDescription(`${message.author} acabou de traficar esse anão para o ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('caso queira traficar mais anões para seus amigos mande o comando novamente! ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}