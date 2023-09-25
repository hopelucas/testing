require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const { CommandKit } = require('commandkit');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on("ready", () => {
    bot.application.commands.set([], 1103294377033474078);
});

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
});

client.login(process.env.TOKEN);
