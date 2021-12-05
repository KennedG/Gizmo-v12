const cpuStat = require("cpu-stat");
const Discord  = require("discord.js")
 module.exports ={
  name: "z",
  run:  async (client, message, args) => {
cpuStat.usagePercent(function(err, percent, seconds) {
 if (err) {
 return console.log(err);
 }
const a = new Discord.MessageEmbed()
.setDescription(`${percent.toFixed(2)}%`)
message.channel.send(a)
})
  }
 }