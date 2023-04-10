module.exports = async (client, interaction) => {
  const member = interaction.member;
  let role;
  switch (interaction.values[0]) {
    case "Lilás":
      role = interaction.guild.roles.cache.get("996983004046053426");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Verde":
      role = interaction.guild.roles.cache.get("996982693340393552");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Vermelho Claro":
      role = interaction.guild.roles.cache.get("1004865069697474661");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Turquesa":
      role = interaction.guild.roles.cache.get("1004865379136442440");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Magenta":
      role = interaction.guild.roles.cache.get("996982434321154148");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Orquídea negra":
      role = interaction.guild.roles.cache.get("996982583298629752");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Laranja":
      role = interaction.guild.roles.cache.get("1004865241215152128");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Vinho":
      role = interaction.guild.roles.cache.get("996982881970835546");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Amarelo":
      role = interaction.guild.roles.cache.get("996982789457059900");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Céu azul":
      role = interaction.guild.roles.cache.get("996983137726906378");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Rosa":
      role = interaction.guild.roles.cache.get("962558909485297724");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Azul":
      role = interaction.guild.roles.cache.get("962559030839111730");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Vermelho":
      role = interaction.guild.roles.cache.get("962559200620343356");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Roxo":
      role = interaction.guild.roles.cache.get("962559369948594257");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Branco":
      role = interaction.guild.roles.cache.get("962559629680853043");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Preto":
      role = interaction.guild.roles.cache.get("962559551293517874");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
  }
  interaction.reply({
    content: "Operação realizada com sucesso.",
    ephemeral: true,
  });
};
