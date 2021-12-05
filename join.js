//entra no canal especifico assim que o bot ficar online
    client.on("ready", () => { const channel = client.channels.cache.get("645054570816471082");//id do voice channel em que deseja que bot entre
    if (!channel) return console.error("O canal não existe!"); 
    channel.join().then(connection => { 'Funcionou!',console.log("Conectado ao canal.");}).catch(er => {'Ocorreu um erro', console.error(er); }); });