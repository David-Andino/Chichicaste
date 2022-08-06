const Discord = require('discord.js')

module.exports = {
    name: "infobot",
    alias: "da informacion acerca del bot",

    execute(client, message, args){
        message.channel.send("Soy un bot hecho para responder dudas acerca del servidor\npuedes ver mi lista de comandos escribiendo -help\nfui desarrollado por David Andino y puedes ver mi codigo fuente en: https://github.com/DavineitorXXX/Chichicaste-bot-discord.git")
    }
}