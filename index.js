const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const command = require('./command.js');

console.log('Welcome to Lilliputian - A disord bot');

client.on('ready', () => {
	console.log(
		`Bot is running on version v${require('./package.json').version}`
	);


    
});

client.login(config.BOTTOKEN);
