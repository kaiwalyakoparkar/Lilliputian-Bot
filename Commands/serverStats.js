module.exports = function(message, Discord){
	const {guild} = message;

	const {name, region, memberCount, owner, afkTimeout } = guild;
	const icon = guild.iconURL();

	const embed = new Discord.MessageEmbed()
		.setTitle(`Server info for ${name}`)
		.setThumbnail(icon)
		.addFields(
			{
				name: 'Region',
				value: region,
			},
			{
				name: 'Members',
				value: memberCount,
			},
			{
				name: 'Owner',
				value: owner.user.tag,
			},
			{
				name: 'AFK Timeout',
				value: afkTimeout,
			},
		);

	message.channel.send(embed);
}