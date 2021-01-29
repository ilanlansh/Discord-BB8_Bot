module.exports = 
{
    name: 'ping',
    description: "This command lets you check the bot\'s ping.",
    execute(message, args)
    {
        message.channel.send("Pong!").then(m =>
            {
                let ping = m.createdTimestamp - message.createdTimestamp;
                m.edit(`Pong! **${ping}ms**`);
            });
    }
}