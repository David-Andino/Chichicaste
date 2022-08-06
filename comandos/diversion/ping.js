const Discord = require('discord.js')

module.exports = {
    name: "ping",
    alias: "Ping del bot",
    data: "Xd",
    
    execute(client, message, args){
        message.reply(`pong! ${client.ws.ping}ms`)
    }
}
