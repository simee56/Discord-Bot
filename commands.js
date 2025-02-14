//this script helps us to register commands 

import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken("your-token");

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("client-id"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}