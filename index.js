const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const command = require('./Commands/command.js');
const hey = require('./Commands/hey.js');
const help = require('./Commands/help.js');
const gif = require('./Commands/gif.js');
const servers = require('./Commands/servers.js');
const purge = require('./Commands/purge.js');
const version = require('./Commands/version.js');
const presence = require('./Commands/presence.js');
const privateDM = require('./Commands/privateMessage.js');
const serverStats = require('./Commands/serverStats.js');

console.log('Welcome to Lilliputian - A disord bot');

client.on('ready', () => {
	console.log(`Lilliput is currently running on version v${require('./package.json').version}`);

    presence(client);

    command(client, ['hey','hello'], message => {
        hey(message);
    });

    command(client, 'servers', message => {
        servers(client, message);
    });

    command(client, ['cc', 'purge','clearchannel'], message => {
        purge(message);
    });

    command(client, 'version', message => {
        version(message);
    });

    command(client, 'help', message => {
        message.channel.send(help);
    });
    
    command(client, 'gif', message =>{
        gif(message);
    });

    command(client, 'invite', message => {
        privateDM(message);
    });

    command(client, ['stats','sStats','serverStats'], message => {
        serverStats(message, Discord);
    });
});

client.login(config.BOTTOKEN);
