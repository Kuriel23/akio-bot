const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  const embed = new discord.EmbedBuilder()
    .setColor("#0F77DD")
    .setDescription(
      "Hii! Esse é o sistema de suporte da nossa comunidade. **Caso queira denunciar um membro, tirar dúvidas, deixar sugestões, resgatar alguma recompensa ou cargo**, está no lugar certo! Selecione uma das opções abaixo para abrir um ticket.\n\n_Favor não abusar do nosso sistema, pode levar a banimento permanente._"
    )
    .setImage("https://i.imgur.com/EnRI5Yf.png")
    .setFooter({ text: "©️ Heaven 2K22 | Todos os direitos reservados." });
  const menu = new discord.StringSelectMenuBuilder()
    .setCustomId("ticket")
    .setMaxValues(1)
    .setOptions([
      { label: "Ajuda", value: "Ajuda" },
      { label: "Denúncias", value: "Denúncias" },
      { label: "Dúvidas", value: "Dúvidas" },
      { label: "Sugestões", value: "Sugestões" },
      { label: "Comprar cargo/vip", value: "Comprar cargo/vip" },
    ]);
  const row = new discord.ActionRowBuilder().setComponents(menu);

  await message.channel.send("https://i.imgur.com/SaLxsGE.png");
  message.channel.send({
    embeds: [embed],
    components: [row],
  });
};
