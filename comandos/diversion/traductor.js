const Discord = require('discord.js')
const translate = require('@vitalets/google-translate-api')

module.exports = {
    name: "traductor",
    alias: "traduce una frase",
    
    execute(client, message, args){
        message.reply(`pong! ${client.ws.ping}ms`)
    }
}