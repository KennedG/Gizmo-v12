const Discord = require('discord.js')


module.exports = {
    name: 'embed',
    aliases: ["criarembed"],
    description: 'crie embeds personalizadas em seu servidor!',

    run: async(client, message, args) => {
        const description = args.join(' ')
        let channel = message.mentions.channels.first()

        if(!channel) return message.reply('Defina um canal para enviar as informações!')
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setDescription(`<a:emoji_81:905018057737527336>|𝙂𝙄𝙕𝙈𝙊

            > **<a:boost:897136917466984470>| Me Adicione clicando**   [Me adicione](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)
            > **<:badgePartner:909263598788968478> | Entre no meu suporte clicando**  [Suporte](https://discord.gg/Vk8sEtb4n5)
            > **<a:sintonia_emoji239:909266143204741181> | Acesse meu website**  [Site](https://sites.google.com/view/botgizmo)
            > **<:badgePartner:909263598788968478>| Mais informações apenas marque <@814726444377833532>**
            
            
            > ** <a:coroa:898814229640019968> | Meu criador: <a:Desenvolvedor:861997097598844929> <@493282797222494230>**
            > **<a:hype:897139138661351434> | Ajudante: <a:Desenvolvedor:861997097598844929>  <@755857419963465789>
             
            > <a:Redinsta_TDA:909271172900880385> **Redes socias**
            > <a:Redinsta_TDA:909271172900880385> Instagram Gizmo [Instagram do Gizmo](https://www.instagram.com/botgizmo/)
            > <a:Redinsta_TDA:909271172900880385> Instagram do criador [Instagram do Kenned](https://www.instagram.com/guilhermekenned_/)
            
            > <:youtube_OFera:909308138543521833> Canal do Youtube| [Youtube](https://www.youtube.com/channel/UCPWNtkJPKdJJZi0dEDWNWMw)
            > <:twitch:909308852724441109> Twitch |[Twitch](https://www.twitch.tv/kennedg)
            > <a:discord:897139171649552455> Discord | [Discord](https://discord.gg/wRf8gtKC4P)
            
            > <a:ovelhamine:861997113537724436> **Informações do bot** <a:ovelhamine:861997113537724436> 
        
            > **<a:verificado:859296534813737001>| Meu nome: Gizmo#8886)
            > **<a:verificado:859296534813737001>| Utilize ${config.prefix}help ou ajuda para a lista de comandos**
            > **<a:verificado:859296534813737001>| ${client.channels.cache.size} canais!**
            > **<a:verificado:859296534813737001>| Estou em ${client.guilds.cache.size} Servidores!**
            > **<a:verificado:859296534813737001>| Estou cuidando de ${client.users.cache.size} Pessoas lindas!**
            > **<a:verificado:859296534813737001>| Sendo cuidado 24H pelo <@883133474733715507>
            `)
        .setImage(`https://i.imgur.com/PFJbjNB.gif`) 
        .setTimestamp()
        .setFooter(`${message.author.tag}`)
        .setColor('PINK') 
        .setThumbnail(message.guild.iconURL())

        channel.send(embed)
        message.channel.send(`<:badgePartner:909263598788968478>| Embed enviado pro canal: ${channel}!`).then(msg => msg.react('🍪'))
        console.log(message)
        }
    }
    