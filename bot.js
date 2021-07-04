console.log('Welcome to the Lilliputian Discord bot!!');

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fetch = require('node-fetch');

client.login(process.env.BOTTOKEN);

client.on('ready', () => {
    console.log('Login Sucessfull');
});


const commandHandler = require('./commands');

client.on('message', commandHandler);
