const Discord = require('discord.js');
const generator = require('generate-password');

module.exports = {
    name: "gerarsenha",
    category: 'Gerar uma senha',
    cooldown: '60',
    run: async(client, message, args) => {

        let password = generator.generate({
            length: args[0],
            numbers: true
        });

        if(!args[0])
        return message.reply('Me fale o tamanho da senha a ser gerada!')

        if(isNaN(args[0]))
        return message.reply('Por favor, insira um número válido!')

        if (!args[0] || args[0] < 1 || args[0] > 15) 
        return message.reply('Insira um tamanho de 1 a 15 dígitos.')

        let user = message.author

        let embeddm = new Discord.MessageEmbed()
            .setTitle('🔒 Senha Gerada com Sucesso')
            .setDescription(`${user} Sua senha é \`${password}\``)
            .setFooter(`Senha: ${password}`)
            .setColor('BLUE')

        let embed = new Discord.MessageEmbed()
            .setTitle('🔒 Senha Gerada com Sucesso')
            .setDescription('Uma senha aleatória foi enviada em seu privado')
            .setColor('RED')

        message.author.send(embeddm).then( msg => {
            msg.react('✔')
        })
        return message.channel.send(`${user}`, embed).then( msg => {
            msg.react('🔒')
        })

    },
};