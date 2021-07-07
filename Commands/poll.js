module.exports = async function (client) {
	const channelIds = [
		'847369501444276234', //This is ideas channel.
	]

	const addReactions = ((message) => {
		message.react('👍');

		setTimeout (() => {
			message.react('👎');
		}, 750);
	});

	client.on('message', message => {
		if(channelIds.includes(message.channel.id)){
			addReactions(message);
		}
	});
}