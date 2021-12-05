const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");


module.exports.run = async (client, message, args) => {
 


    let user = message.author;
    
    let timeout = 8640000;


    let daily = await db.fetch(`box_colet_${user.id}`);
    
   
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
       
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ff58c3")
        .setDescription(`Você já recebeu uma caixa recentemente \n\nColete novamente daqui a **${time.hours}h ${time.minutes}m ${time.seconds}s** `)
        .setColor("32135a")
        .setFooter(`Ei!! Você tem que esperar 😡`)
        .setThumbnail(`${message.author.displayAvatarURL()}`)
        .setTimestamp();
        message.banana(`${user}`, timeEmbed);

    }
      
        
        let moneyEmbed = new Discord.MessageEmbed()
        .setTitle("Você ganhou uma caixa!")
     
        .setDescription(` 📦Abra a sua caixa usando **a!abrircaixa**
        `)
        .setColor("ff58c3")
        .setFooter(`Oque será que tem ai dentro?`)
        .setThumbnail(`${message.author.displayAvatarURL()}`)
        .setTimestamp();
        
        message.banana(`${user}`, moneyEmbed);
        db.add(`box_${user.id}`, 1);
        db.set(`box_colet_${user.id}`, Date.now());
  
}