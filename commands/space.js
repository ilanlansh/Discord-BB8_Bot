const fetch = require("node-fetch");

module.exports = 
{
    name: 'space',
    description: "this command kills. 🙂",
    async execute(message, args, Discord, data)
    {
        let url = `https://api.tenor.com/v1/search?q=rocket&key=${process.env.TENORKEY}&limit=50`;
        let response = await fetch(url);
        let json = await response.json();

        let gif = json.results[Math.floor(Math.random() * json.results.length)].media[0].gif.url;
        
        let launched = message.mentions.users.first();

        if(!launched)
        {
            message.channel.send("please provide a valid user mention.");
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor(data.color)
            .setTitle(`User   ${data.guild.member(message.author).displayName}   just launched   ${data.guild.member(launched).displayName}   into space!`)
            .setImage(gif)
            .setFooter('Made by 𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉', data.avURL);

        message.channel.send(embed);
    }
}