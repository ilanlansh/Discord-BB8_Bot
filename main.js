
const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");

const client = new Discord.Client();

const prefix = ';';

client.once("ready", () =>
{
    console.log(`Logged in as ${client.user.tag}!\n`);
    
    client.user.setStatus("Online");
    client.user.setActivity("Astronauts Fly", { type: 'WATCHING' });
});

client.on("message", (message) =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) { return; }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "test")
    {
        message.channel.send("Beep Boop 🤖");
    }
});

client.login(process.env.TOKEN);