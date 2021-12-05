module.exports = {

    name: "error",
    execute: async (API, err) => {

        const Discord = API.Discord;
        let channel = API.client.channels.cache.get('905231030510821426')
        const embed = new Discord.MessageEmbed()
            .setColor('#b8312c')
            .setTitle('<:error:909246856616366150>  Um erro foi encontrado')
            .setDescription(`\`\`\`js\n${err.stack ? err.stack.slice(0, 1000) : err}\`\`\``)

        if (channel) {
            try {
                await channel.send({ embeds: [embed]}).catch();
            } catch {
                
            }
        }

    }
}