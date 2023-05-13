const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../config.json');
const env = require('dotenv');

module.exports = async function (msg) {
	 tokens = msg.content.split(' ');

	// If nothing specified after the command then this is default keyword
	let keywords = 'hello';

	//If Something is provided after put!gif then that is keyword
	//eg put!gif dance here dance becomes the keyword.
	if (tokens.length > 1) {
		keywords = tokens.slice(1, tokens.length).join(' ');
	}

	//Fetches the gif through api endpoint
	const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    // const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${config.TENORKEY}&contentfilter=high`;
	const response = await fetch(url); //Fetches the url
	const json = await response.json(); //Converts to json and sends forward

	//Now this json is used to extract the actual gif url's from the returned json.
	const index = Math.floor(Math.random() * json.results.length);
	msg.channel.send(json.results[index].url);
}
