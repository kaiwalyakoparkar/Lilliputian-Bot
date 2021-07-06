const Discord = require('discord.js');
const helpEmbed = new Discord.MessageEmbed()
	.setColor('#01dba7')
	.setTitle('Lilliputian ready for help!')
	.setURL('https://discord.js.org/')
	.setAuthor(
		'Lilliputian to help',
		'https://imgur.com/uBv5Pq9.jpg',
		'https://discord.js.org'
	)
	.setDescription('Minimalist yet powerful bot you need in every server.')
	.setThumbnail('https://imgur.com/uBv5Pq9.jpg')
	.addField(
		'Up Commands',
		'put!help = Helps with bot commands \n put!hey = Replies Hey \n put!gif = Sends Hello gif by default \n put!gif <argument> = Sends gif for specified keyword/argument \n put!react = Reacts to the message with emoji'
	)
	.setTimestamp()
	.setFooter(
		'Want help? Lilliput is just `put!help` far',
		'https://imgur.com/uBv5Pq9.jpg'
	);

module.exports = helpEmbed;