const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("info").setDescription("Displays information about the bot"),
	run: async ({ client, interaction }) => {
		interaction.reply(`
        A`)
	},
}
