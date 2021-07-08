const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv').config();

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
const roleClaim = require('./Commands/roleClaim.js');
const poll = require('./Commands/poll.js');
const welcome = require('./Commands/welcome.js');

console.log('Welcome to Lilliputian - A disord bot');

client.on('ready', () => {
	console.log(
		`Lilliput is currently running on version v${
			require('./package.json').version
		}`
	);

	presence(client);

	command(client, ['hey', 'hello'], (message) => {
		hey(message);
	});

	command(client, 'servers', (message) => {
		servers(client, message);
	});

	command(client, ['cc', 'purge', 'clearchannel'], (message) => {
		purge(message);
	});

	command(client, 'version', (message) => {
		version(message);
	});

	command(client, 'help', (message) => {
		message.channel.send(help);
	});

	command(client, 'gif', (message) => {
		gif(message);
	});

	command(client, 'invite', (message) => {
		privateDM(message);
	});

	command(client, ['stats', 'sStats', 'serverStats'], (message) => {
		serverStats(message, Discord);
	});

	command(client, 'ban', (message) => {
		const { member, mentions } = message;

		const tag = `<@${member.id}>`;

		if (
			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('BAN_MEMBERS')
		) {
			const target = mentions.users.first();
			if (target) {
				const targetMember = message.guild.members.cache.get(target.id);
				targetMember.ban();
				message.channel.send(`${tag} the specified user has been banned`);
			} else {
				message.channel.send(`${tag} Please specify someone to ban.`);
			}
			// console.log(target);
		} else {
			message.channel.send(
				`${tag} You do not have permissions to ban a member. Kindly contact Moderator or Admin to report any concern`
			);
		}
	});

	command(client, 'kick', (message) => {
		const { member, mentions } = message;

		const tag = `<@${member.id}>`;

		if (
			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('KICK_MEMBERS')
		) {
			const target = mentions.users.first();
			if (target) {
				const targetMember = message.guild.members.cache.get(target.id);
				targetMember.kick();
				message.channel.send(`${tag} the specified user has been kicked`);
			} else {
				message.channel.send(`${tag} Please specify someone to kick.`);
			}
			// console.log(target);
		} else {
			message.channel.send(
				`${tag} You do not have permissions to ban a member. Kindly contact Moderator or Admin to report any concern`
			);
		}
	});

	// roleClaim(client);

	poll(client);

	// welcome(client);
});

client.login(process.env.BOTTOKEN);
