const Discord = require('discord.js')

module.exports = {
    name: "chichicaste",
    alias: "da respuestas al azar",

    execute(client, message, args){
        const pregunta = args.join(" ")
        if(!pregunta) return message.reply("!Debes hacer una pregunta..")

        let respuestas = ["Si", "No", "Quizas", "Tal vez", "Probablemente", "No lo se", "No lo creo", "Imposible"]
        let random = respuestas[Math.floor(Math.random() * respuestas.length)];

        const embed = new Discord.MessageEmbed()
        .setTitle("Chichicaste")
        .setDescription(`A tu pregunta: ${pregunta}\n\nMi respuesta es:\n${random}`)
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL())
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        message.reply({ embeds: [embed]})
    }
}