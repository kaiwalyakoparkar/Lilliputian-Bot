const firstMessage = require('./firstMessage.js');

module.exports = (client) => {
	const channelID = '862022525583360030';

	let getEmoji = ((emojiName) => {
		client.emojis.cache.find((emoji) => emoji.name === emojiName)
	});

	const emojis = {
		Become : 'Community-Member',
		Allow : 'Community-Ping',
	}

	const reactions = ['🍎', '🔔'];

	let emojiText = 'Add a reaction to claim your roles.\n\n';
	emojiText += `Become ${emojis.Become}\n`
	emojiText += `Allow ${emojis.Allow}\n`

	firstMessage(client, channelID, emojiText, reactions);

	const handleReaction = ((reaction, user, add) => {
		if(user.id === '861212506251984906'){
			return;
		}

		console.log(reaction);
		const emoji = reaction_emoji.name;

		const {guild} = reaction.message;

		const relation = emojis[emoji];
		if(!relation){
			return;
		}

		const role = guild.roles.cache.find(role => role.name ===relation);
		const member = guild.members.cache.find((member) => member.id == user.id);

		if (add) {
      		member.roles.add(role)
    	} else {
      		member.roles.remove(role)
    	}
	});

	client.on('messageReactionAdd', (reaction, user) => {
		if(reaction.message.channel.id === channelID){
			handleReaction(reaction, user, true);
		}
	});

	client.on('messageReactionRemove', (reaction, user) => {
		if(reaction.message.channel.id === channelID){
			handleReaction(reaction, user, true);
		}
	});
}