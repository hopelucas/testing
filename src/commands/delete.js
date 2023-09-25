const { REST, Routes } = require('discord.js');
const { CLIENT_ID, GUILD_ID, TOKEN } = require('/env');

const rest = new REST().setToken(TOKEN);

rest.delete(Routes.applicationCommand(CLIENT_ID, '1151130693301178389'))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);
