module.exports = async function (client) {
	client.user.setPresence({
        status: 'online',
        activity: {
            name: 'for any help to your server members',
            type: 'WATCHING',
            url: 'https://github.com/kaiwalyakoparkar/Lilliputian-Bot',
        },
    });
}