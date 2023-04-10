module.exports = async (client, interaction) => {
  const member = interaction.member
  let role
  switch (interaction.values[0]) {
    case "13+":
      role = interaction.guild.roles.cache.get("962563205870284812");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "16+":
      role = interaction.guild.roles.cache.get("962563363311869992");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "19+":
      role = interaction.guild.roles.cache.get("962563490457985085");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
  }
  interaction.reply({
    content: 'Operação realizada com sucesso.',
    ephemeral: true
  })
}
