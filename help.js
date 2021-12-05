const Discord = require("discord.js");

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`<a:hype:859296488479391764> | Painel de ajuda`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`>  <a:emoji_81:905018057737527336>| Centro de comandos do 𝙂𝙄𝙕𝙈𝙊

**> <a:verificado:908562051927007242> Olá! ${message.author.username}, eu sou o Gizmo, um bot para o discord com múltiplas funções legais e úteis.
> Estou aqui para te ajudar em tudo que estiver em meu alcance!**

> <a:ccclonadl:861996907655331921> **Links importantes**

> **<a:ovelhamine:861997113537724436>**[Me Adicione clicando aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)
> **<a:verificado:908562051927007242>**  [Entre no meu suporte clicando aqui](https://discord.gg/Vk8sEtb4n5)
> **<a:sintonia_emoji239:909266143204741181>**[Acesse meu website](https://sites.google.com/view/botgizmo)
> **<:badgePartner:909263598788968478> Mais informações apenas marque <@814726444377833532>**

> ** <a:hype:897139138661351434>  | Meu criador: <@493282797222494230>**

\n🔗 Utilidade\n⚙ Moderação\n🤣 Diversão \n👑 Outros\n 🎧 Músicas\n 💎 EXTRAS 
⠀`)
    .setFooter(`${message.author.tag}`)
    .setColor("YELLOW")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("◀️")
      msg.react("🔗")
      msg.react("⚙")
      msg.react("🤣")
      msg.react("👑")
      msg.react("💎")
      msg.react("🎧")

      let filtro0 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '🔗' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '⚙' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '🤣' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '👑' && u.id === message.author.id;
      let filtro5 = (r, u) => r.emoji.name === '💎' && u.id === message.author.id;
      let filtro6 = (r, u) => r.emoji.name === '🎧' && u.id === message.author.id;

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);
      let coletor5 = msg.createReactionCollector(filtro5);
      let coletor6 = msg.createReactionCollector(filtro6);

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let ferinha = new Discord.MessageEmbed()
      .setTitle(`Olá Aqui está a minha lista de comandos novamente!`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`Veja meus comandos:

      \n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão  \n👑 Outros   \n 🎧 Músicas   \n 💎 EXTRAS 
⠀`)
      .setFooter(`${message.author.tag}`)
      .setColor("RANDOM")   
        
     
        msg.edit(`${message.author}`, ferinha)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`<a:ovelhamine:861997113537724436>  Utilidade <a:ovelhamine:861997113537724436> `)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
<a:setinha:897138035584565279> **g!avatar**
Mostra a foto/gif da pessoa mencionada.

<a:setinha:897138035584565279> **g!playstore**
Você pesquisa um app pela Playstore.

<a:setinha:897138035584565279> **g!clear**
Apaga a quantidade de mensagens citadas.

<a:setinha:897138035584565279> **g!lembrete**
Para quando você não pode esquecer de algo.

<a:setinha:897138035584565279> **g!ms**
Você pode ver o ping da API e do servidor que você está conectado.

<a:setinha:897138035584565279> **g!say**
Você pode falar como se fosse o Gizmo.

<a:setinha:897138035584565279> **g!userinfo**
Mostra informações sobre o usuário.

<a:setinha:897138035584565279> **g!serverinfo** 
Informação sobre o servidor.

<a:setinha:897138035584565279> **g!infobot** 
Informação sobre o Bot.

<a:setinha:897138035584565279> **g!status**
Você obtém informações do status do usuário.

<a:setinha:897138035584565279> **g!uptime**
Pode ver a quanto tempo eu estou online.

<a:setinha:897138035584565279> **g!bigtext**
O Gizmo te manda a palavra que você escreveu em formato de emoji.

<a:setinha:897138035584565279> **g!gerarsenha**
você obtém uma senha totalmente aleatória.

<a:setinha:897138035584565279> **g!cpu**
Porcentagem de CPU usada pelo Gizmo.

<a:setinha:897138035584565279> **g!emoji**
Manda o emoji escrito.

<a:setinha:897138035584565279> **g!banner**
Você pega o banner da pessoa citada.

<a:setinha:897138035584565279> **g!anuncio**
Anuncia uma mensagem no canal de texto selecionado.

<a:setinha:897138035584565279> **g!calculadora**
Precisa de ajuda na prova? eu ajudo.

<a:setinha:897138035584565279> **g!traduzir**
Traduza uma palavra para o português, oque acha?
**como usar** g!traduzir pt love

<a:setinha:897138035584565279> **g!afk**
Avisa que você está offline.

<a:setinha:897138035584565279> **g!addemoji**
add um emoji no servidor.

<a:setinha:897138035584565279> **g!git**
Pesquisa um repositorio para eu pesquisar.

<a:setinha:897138035584565279> **g!v13**
Fazer a replit mudar para v13.

<a:setinha:897138035584565279> **g!qrcode**
faz um QRcode com o link que você enviar.

<a:setinha:897138035584565279> **g!developer**
hospedar seu bot no **Discord do Kenned**.

<a:setinha:897138035584565279> **g!clima**
Você pode ver o clima do lugar mencionado.
         \n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor2.on("collect", c => { //embed do painel de moderação (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`<a:ovelhamine:861997113537724436>  Moderação <a:ovelhamine:861997113537724436> `)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
<a:setinha:897138035584565279> **g!ban**
Você bane a pessoa mencionada!

<a:setinha:897138035584565279> **g!unban**
Você desnane a pessoa usando o **ID**!

<a:setinha:897138035584565279> **g!voicekick**
Você expulsa alguém da call!

<a:setinha:897138035584565279> **g!lock**
Você tranca o canal que o comadno foi ultilizado!

<a:setinha:897138035584565279> **g!unlock**
Você destranca o canal que o comando foi ultilizado!

<a:setinha:897138035584565279> **g!setnick**
Você altera o apelido do usuário mencionado!

<a:setinha:897138035584565279> **g!editmsg**
Você cria um canal de texto de logs de mensagens editadas (isso serve para controle de mensagens)

<a:setinha:897138035584565279> **g!delmsg**
Você cria um canal de texto de logs de mensagens apagadas (isso serve para controle de mensagens)

<a:setinha:897138035584565279> **g!addcargo**
Você adiciona o cargo na pessoa mencionada!

<a:setinha:897138035584565279> **g!removecargo**
Você remove o cargo na pessoa mencionada!

          \n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor3.on("collect", c => { //embed do painel de diversão (editada)

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`<a:ovelhamine:861997113537724436>  Diversão <a:ovelhamine:861997113537724436> `)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
<a:setinha:897138035584565279> **g!ship**
Está querendo fazer uma prova de amor pra sua webnamoradx? Deixa comigo! Vou te ajudar nesta missão.

<a:setinha:897138035584565279> **g!cafune**
Faz cafuné na pessoa mencionada.

<a:setinha:897138035584565279> **g!jokempo**
Pedra papel tesoura.

<a:setinha:897138035584565279> **g!dados**
joga o dado.

<a:setinha:897138035584565279> **g!hackear**
Você pega as informações da pessoa.

<a:setinha:897138035584565279> **g!stonks**
Manda uma mensagem Stonks.

<a:setinha:897138035584565279> **g!8ball**
Responde uma pergunta.

<a:setinha:897138035584565279> **g!coinflip**
Cara ou coroa.

<a:setinha:897138035584565279> **g!beijar**
Beijo na Web.

<a:setinha:897138035584565279> **g!forca**
Brinca com o Gizmo de forca.

<a:setinha:897138035584565279> **g!adestramento**
Você faz a pessoa ser adestrada.

<a:setinha:897138035584565279> **g!carinha**
Manda uma carinha aleatoria.

<a:setinha:897138035584565279> **g!morse**
Código Morse.

<a:setinha:897138035584565279> **g!tapa**
Você da um tapa na pessoa mencionada.

<a:setinha:897138035584565279> **g!faustão**
O faustão aparece no servidor.

<a:setinha:897138035584565279> **g!cantadas**
Você recebe uma cantada do Gizmo.

<a:setinha:897138035584565279> **g!fusao**
Você faz uma fusão de avatares.

<a:setinha:897138035584565279> **g!atacar**
Você ataca um usuário.

<a:setinha:897138035584565279> **g!ednaldo**
Banido? veja sozinho...

<a:setinha:897138035584565279> **g!traficaranao**
QUE? discando 190

<a:setinha:897138035584565279> **g!triggered**
Mano? a...

<a:setinha:897138035584565279> **g!bolsonaro**
Mas oque será que o Bolsonaro está mostrando na sua televisão?

<a:setinha:897138035584565279> **g!sikera**
O sikera vai dar uma notícia...

<a:setinha:897138035584565279> **g!brindar**
Você brinda com o usuário marcado!

<a:setinha:897138035584565279> **g!abraço**
Você abraça o usuário marcado!

<a:setinha:897138035584565279> **g!carinho**
Você faz carinho no usuário marcado!

<a:setinha:897138035584565279> **g!chamego**
Você faz um chameguino no usuário mencionado!

<a:setinha:897138035584565279> **g!cócegas**
Você faz um cócegas no usuário mencionado!

<a:setinha:897138035584565279> **g!corno**
Quantos porcento você e corno? DESCUBRA!
  \n⠀`)
        .setColor("GREEN")

        msg.edit(`${message.author}`, ferinha)
      })

      coletor4.on("collect", c => { //embed de outros cmds (editada)

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`<a:ovelhamine:861997113537724436>  Outros <a:ovelhamine:861997113537724436> `)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
<a:setinha:897138035584565279> **g!addbot**
Você obtém um link para adicionar o Gizmo!

<a:setinha:897138035584565279> **g!suporte**
Entrar em contato diretamente com o suporte! 

<a:setinha:897138035584565279> **g!sugestão**
Você pode dar uma sugestão de comandos! 

<a:setinha:897138035584565279> **g!site**
Acesso ao meu site!

<a:setinha:897138035584565279> **g!bug**
Informa um bug para os staffs!
 \n⠀`)
        .setColor("BLUE")

        msg.edit(`${message.author}`, ferinha)
      })

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let ferinha = new Discord.MessageEmbed()
      .setTitle(`Olá ${message.author} `)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`<a:setinha:897138035584565279> Veja meus comandos:

      \n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão  <:yes:911046834678538260>  \n👑 Outros   \n 🎧 Músicas   \n 💎 EXTRAS 
⠀`)
      .setFooter(`${message.author.tag}`)
      .setColor("RANDOM")   
        
     
        msg.edit(`${message.author}`, ferinha)
      })


      coletor5.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`<a:ovelhamine:861997113537724436>  EXTRAS <a:ovelhamine:861997113537724436> `)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`

        > <a:mundo:897137157704142888>  **Redes socias**
     
        > <a:mundo:897137157704142888>  Instagram Gizmo [Clique aqui](https://www.instagram.com/botgizmo/)
        > <a:mundo:897137157704142888>  Instagram do criador [Clique aqui](https://www.instagram.com/guilhermekenned_/)

        > <a:mundo:897137157704142888> **Novidades do Gizmo** <a:mundo:897137157704142888>
        > <a:verificado:908562051927007242> g!news
         \n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

    coletor6.on("collect", c => { //embed de outros cmds (editada)

        let ferauwu = new Discord.MessageEmbed()
        .setTitle(`<a:ovelhamine:861997113537724436>  MÚSICAS <a:ovelhamine:861997113537724436> `)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
       > <a:mundo:897137157704142888> **Use M!help para ver a lista de comandos de músicas!**
 \n⠀`)
        .setColor("BLUE")

        msg.edit(`${message.author}`, ferauwu)
      })
    })
}
}

