const jimp = require("jimp");

const Discord = require('discord.js');

const cooldowns = {}
const ms = require("ms")

exports.run = async (client, message, args) => {


        let img = jimp.read("https://i.pinimg.com/236x/25/2a/04/252a045199e33164a8b7577fc001851a.jpg")
        if (!args[0]) return message.channel.send(`<:r_nao_IDP_10K:885644800576069662> **| ${message.author} , escreva algo pra bob queimar!**`)
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                       image.resize(700, 800)
                                           image.print(font, 80, 200, args.join(" "), 518)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.banana({files: [{ attachment: i, name: "bobfogueira.png"}]})
                })
            })
        })
    }