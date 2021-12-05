const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 try {
 let name = ('Faustão');

 let avatar = {avatar: 'https://veja.abril.com.br/wp-content/uploads/2021/01/FAUSTO-SILVA-FAUSTAO-230218.jpg.jpg?quality=70&strip=info&w=680&h=453&crop=1'}

 let vieirinha = [
    'Você destruiu o meu ovo!',
    'Olokinho meu!',
    'Ta pegando fogo bixo',
    'Fulano é um monstro sagrado da teledramaturgia brasileira.',

];
let arg = vieirinha[Math.floor(Math.random() * vieirinha.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
 message.reply('**Eu não tenho permissão para criar um Webhook neste servidor**')
 }


} 