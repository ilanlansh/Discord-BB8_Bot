module.exports = 
{
    name: 'help',
    description: "this command gives a list of commands.",
    execute(message, args, Discord, client, embedArgs)
    {
        if(!args[0])
        {
            const embed = new Discord.MessageEmbed()
            .setColor(embedArgs.color)
            .setTitle("Help")
            .setDescription("This bot was made for the Space Generation Israel Discord server. Made by [𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉#6214](http://github.com/ilanlansh/Discord-BB8_Bot).")
            .setThumbnail(client.user.displayAvatarURL())
            .addFields
            (
                {
                    name: 'For a list of commands',
                    value: 'type `;help commands`'
                }
            )
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', embedArgs.avURL);
            message.channel.send(embed);
        }
        else if(args[0] === 'commands')
        {
            require("./help/commands.js").execute(message, Discord, client, embedArgs);
        }
        else
        {
            message.channel.send("Invalid argument. Type ;help or ;info for more information.");
        }
    }
}