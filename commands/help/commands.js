module.exports = 
{
    execute(message, Discord, client, embedArgs)
    {
        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle("Commands (1/1)")
            .setDescription("A list of commands:")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: ';help / ;info',
                    value: require("../help.js").description
                },
                {
                    name: ';hi',
                    value: require("../hi.js").description
                },
                {
                    name: ';ping',
                    value: require("../ping.js").description
                },
                {
                    name: ';space <@user> / ;launch <@user> / ;dispatch <@user>',
                    value: require("../space.js").description
                }
            )
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);
        message.channel.send(embed);
    }
}