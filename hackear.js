const discord = require('discord.js')
const Canvas = require('canvas')

module.exports = {
  name: "hackerman",
  category: "fun",
  aliases: ["habilidade"],
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {

    const canvas = Canvas.createCanvas(900, 550)
    const ctx = canvas.getContext("2d")

      let avt = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

      const user = message.mentions.users.first()

      let avatar = avt.avatarURL({ dynamic: true, format: "png", size: 1024 });

    if(!user) {
      return message.channel.send(`${message.author}, você precisa mencionar alguém!`)
    }

    const bg = await 
    Canvas.loadImage("https://imgur.com/Fslw0eX.png")
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

    const TargetAvatar = await Canvas.loadImage(`${avatar}`)
    ctx.drawImage(TargetAvatar, 160, 75, 200, 200)

        const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'icarus.png')
        return message.channel.send(`${message.author}`, attachment)
        
    }

}
