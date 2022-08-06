const Discord = require("discord.js")
const meme = require("discord.js-memes")

module.exports = {
    name: "meme",
    alias: " memes GOD",

    execute: async(client, message, args) => {
        const{eMeme, sMeme, all} = require("discord.js-memes")
        const momo = new sMeme()
        .setType(1)

        message.channel.send(momo);
    }
}