
const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");

const client = new Discord.Client();

const prefix = ';';

let data = () =>
{
    this.avURL;
    this.guild;
    this.color;
};
client.users.fetch("381379655665713155").then(user => { data.avURL = user.displayAvatarURL() });
client.guilds.fetch("800090090604855308").then(guild => { data.guild = guild });
data.color = '#f08b48';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () =>
{
    console.log(`Logged in as ${client.user.tag}!\n`);
    
    client.user.setStatus("Online");
    client.user.setActivity(";help | ;info", { type: 'PLAYING' });
});

client.on("message", message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) { return; }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "hi")
    {
        client.commands.get('hi').execute(message, args);
    }
    else if(command === "ping")
    {
        client.commands.get('ping').execute(message, args);
    }
    else if(command === "info" || command === "help")
    {
        client.commands.get('help').execute(message, args, Discord, client, data);
    }
    else if(command === "status")
    {
        client.commands.get('status').execute(message, args, client);
    }
    else if(command === "space" || command === "launch" || command === "dispatch")
    {
        client.commands.get('space').execute(message, args, Discord, data);
    }
});

client.login(process.env.TOKEN);