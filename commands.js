//Primary Imports
const Discord = require('discord.js');
// const client = new Discord.Client();

//Fetches the module to be able to fetch API info
const fetch = require('node-fetch');

//This is the dictonery of random replies to hey message.
const replies = [
	':smiley::smile::heart:',
	'Hello did you call me? :thinking:',
	'Let me rest a bit',
	'How may I help you?',
];

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
		'put!help = Helps with bot commands \n put!hey = Replies Hey \n put!gif = Sends Hello gif by default \n put!gif <argument> = Sends gif for specified keyword/argument'
	)
	.setTimestamp()
	.setFooter(
		'Want help? Lilliput is just `put!help` far',
		'https://imgur.com/uBv5Pq9.jpg'
	);

module.exports = async function (msg) {
	//This splits the sentence by spaces
	const tokens = msg.content.split(' ');

	//Checks if the message is put!hey
	if (tokens[0] === 'put!hey') {
		//If yes then sends in the random reply from the dictonary
		const index = Math.floor(Math.random() * replies.length);
		msg.channel.send(replies[index]);

		//Checks if the message is put!gif
	} else if (tokens[0] === 'put!gif') {
		//If nothing specified after the command then this is default keyword
		let keywords = 'hello';

		//If Something is provided after put!gif then that is keyword
		//eg put!gif dance here dace becomes the keyword.
		if (tokens.length > 1) {
			keywords = tokens.slice(1, tokens.length).join(' ');
		}

		//Fetches the gif through api endpoint
		const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
		const response = await fetch(url); //Fetches the url
		const json = await response.json(); //Converts to json and sends forward

		//Now this json is used to extract the actual gif url's from the returned json.
		const index = Math.floor(Math.random() * json.results.length);
		msg.channel.send(json.results[index].url);
	} else if (tokens[0] === 'put!version') {
		msg.reply(
			`Lilliput is currently running v${require('./package.json').version}`
		);
	} else if (tokens[0] === 'put!help') {
		msg.channel.send(helpEmbed);
	}
};
