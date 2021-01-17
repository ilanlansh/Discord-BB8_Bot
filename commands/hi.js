module.exports = 
{
    name: 'hi',
    description: "this command is hi.",
    execute(message, args)
    {
        message.channel.send("Hello! 😃");
    }
}