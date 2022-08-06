client.on("interactionCreate", async(interaction) =>{
    const ms = require("ms")
    if(interaction.isButton()){
        if(interaction.customId === "Premium"){
            const everyone = interaction.guild.roles.cache.find(L => L.name === "@everyone")
           // let nombrech = interaction.member.user.username.replace(/[^a-zA-z0-9 ]/g, "").trim().toLowerCase();
           // if(interaction.guild.channels.cache.find(m => m.name.replace(/-/g, " ") == nombrech))
           // return message.channel.send("ya existe este canal");
            interaction.guild.channels.create(`soporte-${interaction.user.username}`, {
                type: "GUILD_TEXT",
                parent: "1001666461745565727",
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    },
                    {
                        id: "999878234445447179",
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    },
                    {
                        id: everyone,
                        deny: "VIEW_CHANNEL"
                    }
                ]

            }).then(a => {
                const embedmensaje = new MessageEmbed()
                .setTitle(`${interaction.user.tag} Hola, \nhas entrado a un ticket. Porfavor espera pacientemente a que alguien del equipo de soporte te pueda atender.`)
                .setDescription("Tu ticket sera atendido cuanto antes.")
                .setColor("RANDOM")

                a.send({ embeds: [embedmensaje] })
            })
           interaction.reply({ content: `<@${interaction.user.id}>, tu ticket se creo correctamente, revisa tus menciones.!`})
        }
        
        if(interaction.customId === "cancelar"){
            message.delete().then(a =>{
                a.channel.bulkDelete(1)
            })
        }
    }
})