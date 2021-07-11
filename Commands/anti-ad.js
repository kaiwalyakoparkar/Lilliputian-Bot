module.exports = (client) => {
	const isInvite = async (guild, code) => {
		return await new Promise((resolve) => {
			guild.fetchInvites().then((invites) => {
				for (const invite of invites) {
					if (code === invite[0]) {
						resolve(true);
						return;
					}
				}

				resolve(false);
			});
		});
	};

	client.on('message', async (message) => {
		const { guild, member, content } = message;

		const code = content.split('discord.com/invite/')[1];

		if (content.includes('discord.com/invite/')) {
			const isOurInvite = await isInvite(guild, code);
			if (!isOurInvite) {
				if (!message.member.hasPermission('EMBED_LINKS')) {
					await message.reply(
						'Only regulars are allowed to send message in this server :) Be more active to unlock this feature ;)'
					);
					await message.delete();
				}
			}
		}
	});
};
