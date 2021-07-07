module.exports = ((client) => {
  const channelId = '862190396598779914' // welcome channel
  const targetChannelId = '847115839835865138' // rules and info

  	client.on('guildMemberAdd', (member) => {
  		const message = `Please welcome <@${member.id}> to the server! Please check out ${member.guild.channels.cache.get(targetChannelId).toString()}`

	    const channel = member.guild.channels.cache.get(channelId);
	    channel.send(message);
	});
});