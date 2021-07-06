const fetch = require('node-fetch');

module.exports = async function (message) {
	if(message.member.hasPermission('ADMINISTRATOR')){
        message.channel.messages.fetch().then(results => {
            message.channel.bulkDelete(results);
        });
    };
}