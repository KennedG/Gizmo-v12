const Discord = require("discord.js");

module.exports = {
  name: "git",

  run: async(client, message, args) => {
    let repo = args.join(" ");

    if (!repo) return message.channel.send(`⛔ | ${message.author}, você deve falar um repositorio para eu pesquisar!`);

    message.channel.send(`Eu achei esse repo: https://github.com/${repo}`)
  }
}