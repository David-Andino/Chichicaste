const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, Interaction, ReactionUserManager } = require('discord.js');
const client = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]});

const Discord = require('discord.js');
const { TIMEOUT } = require('dns');
//const { SlashCommandBuilder } = require('@discordjs/builders')


client.once('ready', (bot) =>{
    console.log(`${bot.user.username} esta preparado`);
    client.user.setActivity(` mejorar el servidor`, {
        type: "PLAYING"
    });
});

const fs = require("fs");
const { fileURLToPath } = require('url');

client.commands = new Discord.Collection();

fs.readdirSync('./comandos').forEach((dir) => {
    const commands = fs.readdirSync(`./comandos/${dir}/`).filter((file) => file.endsWith(".js"));

    for (let file of commands) {
        let command = require(`./comandos/${dir}/${file}`);
        client.commands.set(command.name, command)
    }
})
/*
client.slashCommand = new Discord.Collection();
const slashcommandsfiles = fs.readFileSync("./slashcmd").filter(file => file.endsWith("js"))

for(const file of slashcommandsfiles){
    const slash = require(`./slashcmd/${file}`)
    console.log(`Slash command - ${file} cargado`)
    client.slashCommand.set(slash.date.name, slash)
}

client.on("interactionCreate", async(interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()){
        const slashcmds = client.slashCommand.get(interaction.commandName)

        if(!slashcmds) return;

        try{
            await slashcmds.run(client, interaction)
        } catch(e) {
            console.log(e)
        }
    }
})
*/
client.on('messageCreate', async (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;

    let prefix = "-";

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command))
    if(cmd){
        cmd.execute(client, message, args)
    }
    if(!cmd){
        if(message.content === prefix) return
        const embed = new Discord.MessageEmbed()
        .setTitle(":x: ! comando no encontrado.")
        .setDescription(`El comando ${command} no existe. Utiliza -ayuda para ver la lista de comandos.`)
        .setColor("RED")
        .setImage("https://i.imgur.com/4gEKPue.gif")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()

        message.reply({ embeds: [embed] })
    }

   //------------funciones de Comandos----------------//
   
     
    client.on("interactionCreate", interaction =>{
            if(interaction.isButton()){
                if(interaction.customId === "Premium"){
                   
                    const everyone = interaction.guild.roles.cache.find(L => L.name === "@everyone")
                    const conCanal = interaction.guild.channels.cache.find(canal => canal.name === `soporte-${interaction.user.username}`);
                    if(conCanal) {
                        return interaction.reply({content: `Ya cuentas con un ticket abierto, puedes encontrarlo en ${conCanal}`, ephemeral: true})
                      } 
                    else {
                        interaction.guild.channels.create(`soporte-${interaction.user.username}`, {
                            type: "GUILD_TEXT",
                            parent: "1001666461745565727",
                            permissionOverwrites: [
                                {
                                    id: interaction.user.id,
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "READ_MESSAGE_HISTORY"]
                                },
                                {
                                    id: "999878234445447179",
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "READ_MESSAGE_HISTORY"]
                                },
                                {
                                    id: everyone.id,
                                    deny: "VIEW_CHANNEL"
                                }
                            ]
    
                        }).then(a => {
                            const embedmensaje = new MessageEmbed()
                            .setTitle(`${interaction.user.tag} Hola, \nhas entrado a un ticket. Porfavor espera pacientemente a que alguien del equipo de soporte te pueda atender.`)
                            .setDescription("Tu ticket sera atendido cuanto antes.")
                            .setThumbnail(message.guild.iconURL())
                            .setColor("RANDOM")
                            .setImage("https://i.imgur.com/4gEKPue.gif")
                            .setTimestamp()
                            a.send({ embeds: [embedmensaje] }).then(() => {
                                interaction.reply({ content: `<@${interaction.user.id}>, tu ticket se creo correctamente, revisa tus menciones.!`, ephemeral: true})
                            }).catch((error) => {
                                interaction.reply({content: `No se pudo crear el canal de soporte`, ephemeral: true})
                                console.log(error)
                            });
                        })
                       
                    }          
                }
            }
    })
    
/*

*/
})

client.login('MTAwMTE4MzEyNTUzNzI5NjQ5Ng.GY2uH6.NW4EFDu9JKExjZPew9zOSxKRLG0dqdIFgMA23s')