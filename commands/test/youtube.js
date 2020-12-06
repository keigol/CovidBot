const { Command } = require('discord.js-commando');

// Command export
module.exports = class GreetCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'youtube',
            group: 'test',
            memberName: 'youtube',
            description: 'Gives youtube links'
        });
    }

    run(message) {
        message.say('https://wwww.youtube.com');
    }
};