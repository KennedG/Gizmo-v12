const translate = require("@iamtraction/google-translate");

exports.run = async(client, message, args) => {

    const text = args.slice(1).join(" ");

    if (!text)
      return message.channel.send(
        `**|** ${message.author}, insira a língua e o que você deseja traduzir primeiro.`
      );

    try {
      const trad = await translate(text, {
        to: args[0],
      });

      message.channel.send(
        `${message.author}\n\n${trad.text ? trad.text : ""}`
      );
    } catch (err) {
      console.log(err);
      if (err)
        if (
          err.message.startsWith("The language") &&
          err.message.endsWith("is not supported.")
        )
          return message.channel.send(
            ` **-** ${message.author}, linguagem não suportada.`
          );
    }
  }
 
