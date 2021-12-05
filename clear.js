const Discord = require('discord.js');

module.exports = {
    config: {
        name: "clear",
        aliases: ['limpar', 'clear'],
    },
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply({embed: new Discord.MessageEmbed()
.setDescription(`${message.author}** Você não tem permissão para usar este comando.**`) 
.setColor("ff00ff") //Cor da embed
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp(new Date())
});
        let quantia = args[0]
        if (!quantia) return message.reply({embed: new Discord.MessageEmbed()
          .setTitle(`Como usar ? g!limpar [quantia: 1 / 100]`) 
          .setColor('ff00ff') 
        });
        if (isNaN(quantia)) return message.reply({embed: new Discord.MessageEmbed()
          .setTitle(`Por favor utilize somente numeros.`)        
          .setColor('ff00ff') 
        });

        if (parseInt(quantia) > 100 || parseInt(quantia) < 1) return message.reply({embed: new Discord.MessageEmbed()
          .setTitle(`Somente posso apagar de 1 até 100 mensagens`)         
          .setColor('ff00ff')
        });

        try {
        
            message.channel.bulkDelete(quantia);
            message.channel.send({embed: new Discord.MessageEmbed()

.setDescription(`${message.author}`)
.setTitle(`Total de mensagens apagadas: ${quantia}`)
.setColor("ff00ff") 
});


const ferinha = new Discord.MessageEmbed()
.setDescription(`**Foram apagadas:** ${quantia} mensagens\n**No canal:** ${message.channel}\n**Pelo úsuario:** ${message.author}`)
        .setColor("ff00ff")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());


        client.channels.cache.get("914368795454357504").send(ferinha);

      } catch (err) {
        console.log(err); 
      }
        }
      }