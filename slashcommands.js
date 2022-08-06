const fs = require('fs')
const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const {clientID, guild } = require("./config.json")
const { create } = require('domain')
const commands = []
const slashcommandsfiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))

for(const file of slashcommandsfiles){
    const slash = require(`./slashcmd/${file}`)
    console.log(file);
    console.log(slash)
    commands.push(slash.data)
}

const rest = new REST({ version: "9"}).setToken("MTAwMTE4MzEyNTUzNzI5NjQ5Ng.GY2uH6.NW4EFDu9JKExjZPew9zOSxKRLG0dqdIFgMA23s")

createSlash()

async function createSlash() {
    try{
        await rest.put(
            Routes.applicationCommands(clientID), {
                body: commands
            }
        )
        console.log("Slash commands agregados")
    } catch(e){
        console.log(e)
    }
}