const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require("discord.js")
const translate = require("@vitalets/google-translate-api")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("traductor")
    .setDescription("Traduce una frase al idioma que elijas")
    .addStringOption(o => o.setName("texto").setDescription("texto a traducir").setRequired(true))
    .addStringOption(o => o.setName("Idioma").setDescription("El idioma al que traduciras")),

    async run(client, interaction){
        const contenido = interaction.options.getString("texto")
        const idioma = intera.options.getString("idioma")

        var lenguajes = {
            'af': 'Afrikaans',
        'sq': 'Albanian',
        'am': 'Amharic',
        'ar': 'Arabic',
        'hy': 'Armenian',
        'az': 'Azerbaijani',
        'eu': 'Basque',
        'be': 'Belarusian',
        'bn': 'Bengali',
        'bs': 'Bosnian',
        'bg': 'Bulgarian',
        'ca': 'Catalan',
        'ceb': 'Cebuano',
        'ny': 'Chichewa',
        'zh-CN': 'Chinese (Simplified)',
        'zh-TW': 'Chinese (Traditional)',
        'co': 'Corsican',
        'hr': 'Croatian',
        'cs': 'Czech',
        'da': 'Danish',
        'nl': 'Dutch',
        'en': 'English',
        'eo': 'Esperanto',
        'et': 'Estonian',
        'tl': 'Filipino',
        'fi': 'Finnish',
        'fr': 'French',
        'fy': 'Frisian',
        'gl': 'Galician',
        'ka': 'Georgian',
        'de': 'German',
        'el': 'Greek',
        'gu': 'Gujarati',
        'ht': 'Haitian Creole',
        'ha': 'Hausa',
        'haw': 'Hawaiian',
        'he': 'Hebrew',
        'iw': 'Hebrew',
        'hi': 'Hindi',
        'hmn': 'Hmong',
        'hu': 'Hungarian',
        'is': 'Icelandic',
        'ig': 'Igbo',
        'id': 'Indonesian',
        'ga': 'Irish',
        'it': 'Italian',
        'ja': 'Japanese',
        'jw': 'Javanese',
        'kn': 'Kannada',
        'kk': 'Kazakh',
        'km': 'Khmer',
        'ko': 'Korean',
        'ku': 'Kurdish (Kurmanji)',
        'ky': 'Kyrgyz',
        'lo': 'Lao',
        'la': 'Latin',
        'lv': 'Latvian',
        'lt': 'Lithuanian',
        'lb': 'Luxembourgish',
        'mk': 'Macedonian',
        'mg': 'Malagasy',
        'ms': 'Malay',
        'ml': 'Malayalam',
        'mt': 'Maltese',
        'mi': 'Maori',
        'mr': 'Marathi',
        'mn': 'Mongolian',
        'my': 'Myanmar (Burmese)',
        'ne': 'Nepali',
        'no': 'Norwegian',
        'ps': 'Pashto',
        'fa': 'Persian',
        'pl': 'Polish',
        'pt': 'Portuguese',
        'pa': 'Punjabi',
        'ro': 'Romanian',
        'ru': 'Russian',
        'sm': 'Samoan',
        'gd': 'Scots Gaelic',
        'sr': 'Serbian',
        'st': 'Sesotho',
        'sn': 'Shona',
        'sd': 'Sindhi',
        'si': 'Sinhala',
        'sk': 'Slovak',
        'sl': 'Slovenian',
        'so': 'Somali',
        'es': 'Spanish',
        'su': 'Sundanese',
        'sw': 'Swahili',
        'sv': 'Swedish',
        'tg': 'Tajik',
        'ta': 'Tamil',
        'te': 'Telugu',
        'th': 'Thai',
        'tr': 'Turkish',
        'uk': 'Ukrainian',
        'ur': 'Urdu',
        'uz': 'Uzbek',
        'vi': 'Vietnamese',
        'cy': 'Welsh',
        'xh': 'Xhosa',
        'yi': 'Yiddish',
        'yo': 'Yoruba',
        'zu': 'Zulu'
        }

        if(lenguajes[idioma]){
            var traduccion = lenguajes[idioma]
        } else {
            var traduccion = idioma
        }

        translate(traduccion, {to: "es"}).then(res => {
            const resultado = res.text
            translate(contenido, {to: idioma}).then(res => {
                const embed = new Discord.MessageEmbed()
                .setTitle("Traduccion")
                .addFields(
                    {name: 'Contenido ->', value: contenido, inline: true},
                    {name: 'Resultado ->', value: res.text, inline: true},
                    {name: 'Traducido ->', value: `Traducido al idioma ${resultado.toLowerCase()}`, inline: true}
                )
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter({ text: "Chichicaste Traductor"})
                interaction.reply({ embeds: [embed] })  
            }).catch(e => {
                return interaction.reply({ content: "Has seleccionado un idioma que aun no esta disponible :c", ephemeral: false})
                console.log(e)
            })
        })
    }
}