const TYPES = ["play", "watch", "listen", "stream", "compete"];

module.exports = 
{
    name: 'status',
    description: "This command lets server administrators change the bot\'s status.",
    execute(message, args, client)
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            try
            {
                var type = args[0].toLowerCase();
            }
            catch(e)
            {
                message.channel.send("please enter a valid Activity Type. [ `play` | `watch` | `listen` | `stream` | `compete` ]");
                return;
            }
                
            args.shift();
            let status = args.join(" ");

            if(TYPES.indexOf(type) == -1)
            {
                message.channel.send("please enter a valid Activity Type. [ `play` | `watch` | `listen` | `stream` | `compete` ]");
                return;
            }

            if(status == "")
            {
                message.channel.send("please enter a status that isn't blank.");
                return;
            }

            if(type == "play")
            {
                client.user.setActivity(status, { type: 'PLAYING' });
                message.channel.send(`status changed to **Playing ${status}**`);
            }
            else if(type == "watch")
            {
                client.user.setActivity(status, { type: 'WATCHING' });
                message.channel.send(`status changed to **Watching ${status}**`);
            }
            else if(type == "listen")
            {
                client.user.setActivity(status, { type: 'LISTENING' });
                message.channel.send(`status changed to **Listening to ${status}**`);
            }
            else if(type == "compete")
            {
                client.user.setActivity(status, { type: 'COMPETING' });
                message.channel.send(`status changed to **Competing in ${status}**`);
            }
            else if(type == "stream")
            {
                client.user.setActivity(status, {
                    type: 'STREAMING',
                    url: 'https://www.twitch.tv/ilanlansh'
                });
                message.channel.send(`status changed to **Streaming ${status}**`);
            }
        }
        else
        {
            message.channel.send("You're not allowed to use this!")
        }
    }
}