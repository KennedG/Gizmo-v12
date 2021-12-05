const cooldown = new Set();

module.exports = {
    name: "cooldown",
    author: "ferinha",

    run: async (client, message, args) => {

    let tempo_em_milisegundos = 3000; //Coloque o tempo em milisegundos (Obs: 1 segundo = Mil milisegundos)  

    if(cooldown.has(message.author.id)) {

//Coloque a mensagem de erro / cooldown aqui.

        message.channel.send(`${message.author} | Você precisa aguardar \`${tempo_em_milisegundos} milisegundos\` para utilizar este comando novamente!`).then(msg=>{msg.delete({timeout:5000})})

    } else {

// Coloque o script dentro dessa parte! (ELSE) |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


        message.channel.send(`Olá **${message.author.username}**,tudo na ordem?.`) 


// Coloque o script dentro dessa parte! (ELSE) |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Script disponibilizado por FERINHA - https://discord.gg/PEdmSZzCAv

        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, `${tempo_em_milisegundos}`);
    }
}
}