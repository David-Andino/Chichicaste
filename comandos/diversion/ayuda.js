const Discord = require('discord.js')

module.exports = {
    name: "ayuda",
    alias: "brinda ayuda a los usuarios del servidor",

    execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("Lista de comandos")
        .setThumbnail(message.guild.iconURL())
        .setDescription("●-ayuda: Muestra todos los comandos.\n●-infobot: muestra informacion acerca del bot.\n●-chichicaste: con este comando puedes hacerle una pregunta al bot.\n●-infoserver: aqui veremos informacion relacionada al servidor de Minecraft.\n●-akinator: el bot adivinara tu personaje.\n●-meme: envia un meme ramdon.\n●-estadoserver: muestra el estado actual del servidor.")
        .setColor("RANDOM")
        .setImage("https://i.imgur.com/4gEKPue.gif")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()  
        message.channel.send({ embeds: [embed]})
    }
}