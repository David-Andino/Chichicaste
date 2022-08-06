const Discord = require('discord.js')

module.exports = {
    name: "infoserver",
    alias: "da informacion acerca del servidor",

    execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("Informacion del Servidor")
        .setThumbnail(message.guild.iconURL())
        .setDescription("●Juego: Minecraft\n●Version: forge 1.16.5\n●Nombre Servidor: ChichicasteServer\n●IP: 103.195.103.134:25646\n●Mods: https://www.mediafire.com/file/x9yw0ly8vpgf8qr/mods.zip/file\n\n❤*Se un buen usuario del servidor*❤")
        .setColor("RANDOM")
        .setImage("https://i.imgur.com/4gEKPue.gif")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        message.channel.send({ embeds: [embed]})
    }
}