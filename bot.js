//Welcome to the Lilliputian Discord Bot
console.log('Welcome to the Lilliputian Discord bot!!');

//Primary Imports
const Discord = require('discord.js');
const client = new Discord.Client();

//Imports which are necessary for dev
require('dotenv').config();//required to enable use of .env file
const fetch = require('node-fetch');//require to fetch url for use in API

//Loging in as client.
client.login(process.env.BOTTOKEN);

//When client gets logged in successfully this callback runs
client.on('ready', () => {
    console.log('Login Sucessfull');
});

//Points to external commands list.
const commandHandler = require('./commands');

//Access the commands in the seperate file.
client.on('message', commandHandler);
