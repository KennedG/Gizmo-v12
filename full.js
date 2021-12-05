const Discord = require ("discord.js")

module.exports = {
    name: "embed full by ferinha <3",
    description: "o bot vai enviar uma embed full + menção",
    author: "ferinha :))",

    run: async(client, message, args) => {

        let fera = message.author;

        let ferinha = new Discord.MessageEmbed()
        .setAuthor(`➔ Essa parte fica em cima do título`, /*url de alguma coisa*/)
        .setTitle(`    > <a:emoji_81:905018057737527336>|𝙂𝙄𝙕𝙈𝙊

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
        .setDescription(``)
        .setFooter(`➔ Rodapé da embed`)
        .setColor("RANDOM")
        .setImage(client.user.displayAvatarURL()) //url de alguma imagem (imagem grande em baixo)
        .setThumbnail("https://cdn.discordapp.com/attachments/842077848482349107/842081594532560916/20200812_103342.png") //url de alguma imagem (na direita | parte de cima)
        .setTimestamp()
        .addFields(

        );

        message.channel.send(fera, ferinha)
  
    }
}