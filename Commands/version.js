module.exports = async function (message) {
	message.reply(`Lilliput is currently running on version v${require('../package.json').version}`);
}