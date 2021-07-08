const Discord = require('discord.js');
const helpEmbed = new Discord.MessageEmbed()
	.setColor('#01dba7')
	.setTitle('Lilliputian ready for help!')
	.setURL('https://github.com/kaiwalyakoparkar/Lilliputian-Bot')
	.setAuthor(
		'Lilliputian to help',
		'https://imgur.com/uBv5Pq9.jpg',
		'https://discord.js.org'
	)
	.setDescription(
		'Minimalist yet powerful bot you need in every server. Type `put!` before every command below'
	)
	.addFields(
		{
			name: 'General Purpose Commands',
			value: '`help`,  `invite`, `servers`, `version`, `poll`',
		},
		{ name: 'Fun Commands', value: '`gif`, `gif<keyword>`,`hey`, `hello`' },
		{
			name: 'Moderation Commands (Only for Admins)',
			value: '`cc`,`clearchannel`,`purge`',
		}
	)
	.setTimestamp()
	.setFooter(
		'Want help? Lilliput is just `put!help` far',
		'https://imgur.com/uBv5Pq9.jpg'
	);

module.exports = helpEmbed;
