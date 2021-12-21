import { CommandInteraction, MessageEmbed } from 'discord.js'

export = {
  name: 'about',
  channels: ['GUILD_TEXT', 'GUILD_PUBLIC_THREAD', 'GUILD_PRIVATE_THREAD'],
  permissions: [],
  async exec (i: CommandInteraction): Promise<void> {
    const embed = new MessageEmbed({
      author: {
        name: i.client.user?.tag ?? 'Unknown',
        iconURL: i.client.user?.displayAvatarURL({ dynamic: true })
      },
      color: 3756250,
      fields: [
        // @ts-expect-error
        { name: 'Owner', value: `${i.client.application ? ((await i.client.application.fetch()).owner.name ? i.client.application.owner.owner.tag : i.client.application.owner.tag) : 'Unknown'}` },
        { name: 'Library', value: 'discord.js@13.3.1' },
        { name: 'Repository', value: 'https://github.com/Wolftallemo/autoclear' }
      ],
      title: 'About'
    })
    await i.reply({ embeds: [embed] })
  }
}
