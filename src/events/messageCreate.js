const discord = require("discord.js");
const path = "../messages/";

module.exports = async (client, message) => {
  if (message.guild === null) return;

  if (message.author.bot) return 0;

  if (
    message.content.startsWith("Duvido") ||
    message.content.startsWith("duvido")
  )
    message.reply("Meu pau no seu ouvido");

  if (message.author.id === "354233941550694400") {
    if (message.content.startsWith("ak?"))
      require(path + message.content.replace("ak?", ""))(client, message).catch(
        (err) => {
          return message.reply(err);
        }
      );
    if (message.content.startsWith(`<@${client.user.id}>`)) {
      const embed = new discord.EmbedBuilder()
        .setTitle("Akio Control - A fast and efficient control")
        .setDescription(
          "Controle comandos de desenvolvimento tudo num menu de controlo rápido e eficiente!"
        )
        .setColor(client.cor);
      const row = new discord.ActionRowBuilder().addComponents(
        new discord.StringSelectMenuBuilder()
          .setCustomId("control")
          .setPlaceholder("Controle tudo imediatamente!")
          .addOptions({
            label: "Faça evaluate de um código (dev only)",
            description: "Cuidado isto pode ser perigoso!",
            value: "eval",
            emoji: "1026116730969395311",
          })
      );
      message.reply({ embeds: [embed], components: [row] });
    }
  }
};
