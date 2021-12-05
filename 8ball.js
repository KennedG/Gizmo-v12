const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 try {
 let name = ('Gizmo responde');

 let avatar = {avatar: 'https://images-ext-2.discordapp.net/external/ePHckLGrbUK1WzZLDZZRhZ-uZfkZeAAVzLuKpoUVeGI/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/814726444377833532/012e6b183e82a7145a014f4c2466b4b5.png?width=270&height=270'}


 let respostas = [
  'Sim.',
  'Talvez.',
  'Melhor você não saber.',
  'Não.',
  'Pare de me pertubar.',
  'Olhe para trás...',
  'Você não viu nada...',
  'Sabia que meu criador não existe ?',
  'Ninguém sabe.',
  'Me deixe em paz!',
  'Pergunte a loritta.',
  'Pergunte a Loritta e me deixe em paz.',
  'Nem eu consigo responder.',
  'Pergunta a outro bot.',
  'Error na linha 80 , zueira eu não tenho erros.',
  'Você não se cansa?',
  'É sério isso?',
  'Pra que isso...',
  'Sabia que são mais de 100 respostas?',
  'Meu dono ficou 2 horas fazendo esse comando e você usa assim.',
  'Deixe eu dormir!',
  'Paraaaaaa',
  'Não me pergunte nada , estou falando com a Loritta.',
  'Sem mais perguntas.',
  'Talvez sim , Talvez não.',
  'Pergunte a ela(e)',
  'Testando... 1 2 3.'

];
let arg = respostas[Math.floor(Math.random() * respostas.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
 message.reply('**Cadê minha permissão pra criar webhooks ?**')
 }


}