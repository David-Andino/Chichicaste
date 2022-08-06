const Discord = require('discord.js')

module.exports = {
    data: {
        name: "ping",
        alias: "Ping del bot"
    },
    
    execute(client, message, args){
        message.reply(`pong! ${client.ws.ping}ms`)
    }
}
