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


})

client.login(
    //TOKEN
)

