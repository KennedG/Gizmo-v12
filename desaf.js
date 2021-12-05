module.exports = {
    name: "help",
    run: async(client, message) => {
      message.channel.send(`${message.author} lhe desafio a reajir!`).then(msg => {
      
      msg.react("👍")
      
    const filtro = (r, u) => r.emoji.name === '👍' && u.id === message.author.id;
    
    const collector = msg.createReactionCollector(filtro);
    
      collector.on("collect", reaction => {
        reaction.users.remove(message.author.id)
        msg.edit("Vamos reaja!")
        msg.edit("vc e fraco!")
        msg.edit("kkkkk eu merda!")
        msg.edit("lixo n sabe clicar numa reação!")
        msg.edit("kkkkk cuzão!")
        msg.edit("pau no cu!")
      })
    })
    }}
    //mennyf