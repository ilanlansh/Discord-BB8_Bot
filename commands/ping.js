module.exports = 
{
    name: 'ping',
    description: "this command checks the bot's ping!",
    execute(message, args)
    {
        message.channel.send("Pong!").then(m =>
            {
                let ping = m.createdTimestamp - message.createdTimestamp;
                m.edit(`Pong! **${ping}ms**`);
            });
    }
}