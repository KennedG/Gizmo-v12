const jimp = require("jimp")
const Discord = require('discord.js')
const cooldowns = {}
const ms = require("ms")

exports.run = async (client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 100
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle('Muita Calma nessa hora amigão !!!')
  .setColor('#F500FF')
    .setImage('https://cdn.discordapp.com/attachments/755506991019065425/765688678801604659/purple_load.gif')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(` Espere um pouco para utilizar esse comando novamente`).then(msg=> {
    msg.delete({ timeout: 100 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }

        let img = jimp.read("https://media.discordapp.net/attachments/854564289628209182/882825150578438184/gabigol.png?width=391&height=467")
        if (!args[0]) return message.reply("Digite algo para a plaquina do gabigol!")
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                          message.delete().catch(O_o => {});
                       image.resize(885, 494)
                                           image.print(font, 300, 80, args.join(" "), 7000)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "gabigol.png"}]})
                })
            })
        })
    }