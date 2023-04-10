const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  const embed = new discord.EmbedBuilder()
    .setColor("#644080")
    .setDescription(
      "Que tal decorar seu perfil com pronomes e cores de sua escolha? Para realizar o registro, basta selecionar o cargo que deseja em cada aba. \n**Help:** Caso ocorra algum problema durante a seleção de cargos, abra um ticket na área de suporte. "
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/988568297018646558/1055183951016251453/IMG_1992.png"
    )
    .setFooter({ text: "©️ Heaven 2022 | Todos os direitos reservados." });
  const generos = new discord.StringSelectMenuBuilder()
    .setCustomId("generos")
    .setPlaceholder("Gêneros")
    .setMaxValues(1)
    .setOptions([
      { label: "Homem", value: "Homem" },
      { label: "Mulher", value: "Mulher" },
      { label: "Não binário", value: "Não binário" },
    ]);
  const idade = new discord.StringSelectMenuBuilder()
    .setCustomId("idade")
    .setPlaceholder("Idade")
    .setMaxValues(1)
    .setOptions([
      { label: "13 a 15 anos", value: "13+" },
      { label: "16 a 18 anos", value: "16+" },
      { label: "19 anos ou +", value: "19+" },
    ]);
  const hobbies = new discord.StringSelectMenuBuilder()
    .setCustomId("hobbies")
    .setPlaceholder("Hobbies")
    .setMaxValues(1)
    .setOptions([
      { label: "Animes", value: "Animes" },
      { label: "Gamer", value: "Gamer" },
      { label: "Artista", value: "Artista" },
      { label: "Leitor", value: "Leitor" },
      { label: "Apenas vivendo", value: "Apenas vivendo" },
    ]);
  const cores = new discord.StringSelectMenuBuilder()
    .setCustomId("cores")
    .setPlaceholder("Cores")
    .setMaxValues(1)
    .setOptions([
      { label: "Lilás", value: "Lilás" },
      { label: "Verde", value: "Verde" },
      { label: "Vermelho Claro", value: "Vermelho Claro" },
      { label: "Turquesa", value: "Turquesa" },
      { label: "Magenta", value: "Magenta" },
      { label: "Orquídea negra", value: "Orquídea negra" },
      { label: "Laranja", value: "Laranja" },
      { label: "Vinho", value: "Vinho" },
      { label: "Amarelo", value: "Amarelo" },
      { label: "Céu azul", value: "Céu azul" },
      { label: "Rosa", value: "Rosa" },
      { label: "Azul", value: "Azul" },
      { label: "Vermelho", value: "Vermelho" },
      { label: "Roxo", value: "Roxo" },
      { label: "Branco", value: "Branco" },
      { label: "Preto", value: "Preto" },
    ]);
  const pings = new discord.StringSelectMenuBuilder()
    .setCustomId("pings")
    .setPlaceholder("Pings")
    .setMaxValues(1)
    .setOptions([
      { label: "Eventos", value: "Eventos" },
      { label: "Jornal", value: "Jornal" },
      { label: "Anúncios", value: "Anúncios" },
      { label: "Sorteios", value: "Sorteios" },
      { label: "Atualizações", value: "Atualizações" },
      { label: "Nova parceria", value: "Nova parceria" },
      { label: "Mudae lover", value: "Mudae lover" },
    ]);
  const row = new discord.ActionRowBuilder().setComponents(generos);
  const row2 = new discord.ActionRowBuilder().setComponents(idade);
  const row5 = new discord.ActionRowBuilder().setComponents(hobbies);
  const row3 = new discord.ActionRowBuilder().setComponents(cores);
  const row4 = new discord.ActionRowBuilder().setComponents(pings);

  await message.channel.send("https://i.imgur.com/azVIdho.jpeg");
  message.channel.send({
    embeds: [embed],
    components: [row, row2, row5, row4, row3],
  });
};
