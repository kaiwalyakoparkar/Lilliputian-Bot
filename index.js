const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const command = require('./command.js');

console.log('Welcome to Lilliputian - A disord bot');

client.on('ready', () => {
	console.log(
		`Bot is running on version v${require('./package.json').version}`
	);


    command(client, ['hey','hello'], message => {
        message.channel.send('Heya how may I help you?');
    });

    command(client, 'servers', message => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
        })
    });

    command(client, ['cc', 'purge','clearchannel'], message => {
        if(message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then(results => {
                message.channel.bulkDelete(results);
            })
        }
    });

    command(client, 'status', message => {
        const content = message.content.replace('put!status', '');

        if(message.member.hasPermission('ADMINISTRATOR')){
            client.user.setPresence({
                activity: {
                    name: content,
                    type: 1
                }
            });
        }
    });
});

client.login(config.BOTTOKEN);
