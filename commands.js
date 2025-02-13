import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken("MTMzOTU2NjkzNjMzNzU1MTM2MQ.GAniIh.eUmqPPc3nxMX8AtrKpkC25iK4g-I3vxYnyL5Jo");

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1339566936337551361"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}