require('dotenv-flow').config();

const { CommandoClient } = require('discord.js-commando');
const prefix = "!"
const bot = new CommandoClient({
	commandPrefix: prefix,
});

bot.registry
    .registerDefaultTypes()
    .registerGroup('test', 'test group')
    .registerDefaultGroups()
    //.registerDefaultCommands()
    .registerCommandsIn(__dirname + '/commands');

bot.login(process.env.TOKEN);

bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.tag);
});

bot.on('message', msg => {
    if(msg.content.startsWith(prefix + 'bye')) {
        msg.reply('bye!');
    }
});
