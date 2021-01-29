module.exports =
{
    name: 'nick',
    description: 'This command lets server administrators change members\' nicknames easily.',
    execute(message, args, officerRoleID)
    {
        if(!message.member.hasPermission("MANAGE_NICKNAMES"))
        {
            message.channel.send("You don't have permission to do this.");
            return;
        }
        else
        {
            let member = message.mentions.members.first();
            let user = message.mentions.users.first();

            if(!member)
            {
                message.channel.send("Please provide a valid user mention.");
                return;
            }
            else
            {
                let oldNickname = member.nickname;
                if(!oldNickname) { oldNickname = user.username; }

                args.shift()
                let nickname = args.join(" ");

                if(!nickname)
                {
                    message.channel.send("Please provide a valid nickname.");
                    return;
                }
                else
                {
                    if(nickname.length > 32)
                    {
                        message.channel.send("Nickname must not be longer than 32 characters.");
                    }
                    else
                    {
                        if(member.roles.cache.find(role => role.id === officerRoleID))
                        {
                            message.channel.send("Bot has no permission to change this member's nickname.");
                            return;
                        }
                        else
                        {
                            if(nickname === "reset")
                            {
                                member.setNickname(user.username);
                                message.channel.send(`<@${member.id}>'s nickname has been reset.`);
                            }
                            else
                            {
                                member.setNickname(nickname);
                                message.channel.send(`<@${member.id}>'s nickname changed from **${oldNickname}** to **${nickname}**`);
                            }
                        }
                    }
                }
            }
        }
    }
}