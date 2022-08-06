const Discord = require("discord.js")
const akineitor = require("discord.js-akinator")
const { execute } = require("./ping")

module.exports = {
    name: "akinator",
    alias: "aki",

    execute: async(client, message, args, prefix) => {
        akineitor(message, {
            language : "es",
            childMode: false,
            gameType: "character",
            useButtons: true,
            embedColor: "White"

        }).catch((err) => { return; })
    }
}