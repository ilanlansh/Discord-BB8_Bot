module.exports = 
{
    execute(message, Discord, client, data)
    {
        const embed = new Discord.MessageEmbed()
            .setColor(data.color)
            .setTitle("Commands (1/1)")
            .setDescription("A list of commands:")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: ';help / ;info',
                    value: 'Sends info and instructions about the bot.'
                },
                {
                    name: ';hi',
                    value: 'hello! 😃'
                },
                {
                    name: ';ping',
                    value: 'This command lets you check the bot\'s ping!'
                },
                {
                    name: ';space <@user> / ;launch <@user> / ;dispatch <@user>',
                    value: 'This command lets you launch someone into space.'
                }
            )
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', data.avURL);
        message.channel.send(embed);
    }
}