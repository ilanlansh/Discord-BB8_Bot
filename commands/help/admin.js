module.exports = 
{
    execute(message, Discord, client, embedArgs)
    {
        const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle("Administrator Commands (1/1)")
            .setDescription("These commands are only available for members with administrator permission.")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: ';nick <@user> <(nickname)|reset>',
                    value: require("../nick.js").description
                },
                {
                    name: ';status <type> <status>',
                    value: require("../status.js").description
                }
            )
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);
        message.channel.send(embed);
    }
}