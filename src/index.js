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
     [Command("test")]
        public async Task unload_guild_slash()
        {
            List<ApplicationCommandProperties> applicationCommandProperties = new List<ApplicationCommandProperties>();
            await Context.Guild.BulkOverwriteApplicationCommandAsync(applicationCommandProperties.ToArray());
            ReplyAsync("guild command unloaded");
        }
});

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
    eventsPath: `${__dirname}/events`,
});

client.login(process.env.TOKEN);
