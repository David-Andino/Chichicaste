const util = require('minecraft-server-util');
const Discord = require("discord.js");

    const options = {
        timeout: 1000 * 5, // timeout in milliseconds
        enableSRV: true // SRV record lookup
    };
    
    module.exports ={
    name: "estadoserver",
    alias: "Describe el estado a tiempo real de tu servidor",
    execute: async(client, message, args, prefix) => {
        util.status('103.195.103.134', 25646, options)
        .then((result) => {
            
            const string1 = JSON.stringify(result);// turn the object into a string
            const string = JSON.parse(string1);// make the string parsable
            const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Chichicaste Server")
        .setThumbnail(message.guild.iconURL())
        .setDescription(``)
        .addFields(
            {name: "Estado del servidor", value: "🟢Online"},
            {name:"Version del servidor", value: `✔️${string.version.name}`},
            {name:"Version del protocolo", value:`📌${string.version.protocol}`},
            {name:"Jugadores en linea", value:`👤${string.players.online}`},
            {name:"Maximo de jugadores", value:`🔒${string.players.max}`},
            {name:"MOTD", value:`🚫${string.motd.clean}`},
            {name:"Latencia", value:`📉${string.roundTripLatency} ms`},
        )
        .setImage("https://i.imgur.com/4gEKPue.gif")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        message.channel.send({embeds: [embed]})// send the embed
        }).catch((error) => {
            const embed = new Discord.MessageEmbed()
        .setTitle("⚠️El servidor no esta en linea⚠️")
        .setThumbnail(message.guild.iconURL())
        .setDescription("🚨Es probable que Chichicaste Server este en mantenimiento o este recibiendo actualizaciones.🚧 \n \n ⌚Por favor intenta mas tarde⌚")
        .setColor("RED")
        .setImage("https://i.imgur.com/4gEKPue.gif")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()  
        
        message.channel.send({ embeds: [embed]})
        });
    }   
    }

