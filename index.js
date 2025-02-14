const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents:
        [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
});

client.on("messageCreate", (message) => {
    if (message.author.bot)
        return;

    message.reply({
        content: "Hello form Bot",
    });

    console.log(message)                    // this will display the message
    // console.log(message.content);           this will display the message as well as other informations such as user's info.
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!")
});

client.login(
    "MTMzOTU2NjkzNjMzNzU1MTM2MQ.GAniIh.eUmqPPc3nxMX8AtrKpkC25iK4g-I3vxYnyL5Jo"
)

