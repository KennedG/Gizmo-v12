exports.run = async(_ ,message, ...argumentos) => {
    let msg = await message.channel.send(`**Iniciando contagem!**`)
    let seconds = 0
    let minutes = 0
    let hora = 0
    setInterval(() => {
      if(seconds >= 60)   {
      minutes++
      seconds = 0
      }
      if(minutes >= 60) {
      hora++
      minutes = 0
      }
      const agora = `${hora}:${minutes}:${seconds}`
      msg.edit(agora)
      seconds++
    }, 1000)
  }