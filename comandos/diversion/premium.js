const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')


module.exports = {
    name: "yopremium",
    alias: "tickets para volverse premium",

    async execute(client, message, args){
        const embed = new MessageEmbed()
        .setTitle("Panel Premium")
        .setDescription("Estas a punto de hacerte un usuario premium, \n*informacion*: A la hora que des click a boton automaticamente se va a generar\nun canal privado con tu nombre en el cual\nun moderador se pondra en contacto contigo para hacer valida\ntu suscripcion. \n \n❤️Recuerda que al volverte premium nos ayudas a mantener el servidor❤️ \n\nValor de la suscripcion: 50 lps (2.03 $)/mes. *Puedes cancelar en cualquier momento* \n\n*Beneficios*\n✅Obtendras un pack de objetos raros dentro del juego(cambiaran cada mes)\n✅Se te asignara un rol de premium dentro del servidor.\n \nVuelvete premium ahora mismo dandole click al ticket⬇️!")
        .setColor("GOLD")
        .setImage("https://i.imgur.com/4gEKPue.gif")
        .setTimestamp();
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId("Premium")
            .setStyle("SUCCESS")
            .setLabel("Abrir ticket")
            .setEmoji("🎫")
        )
        message.channel.send({ embeds: [embed], components: [row]})
    }
}