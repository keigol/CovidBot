const { Command } = require('discord.js-commando');

// Command export
module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'test',
            memberName: 'ping and pong',
            description: 'Will reply pong',
            args: [
                {
                    key: 'name',
                    prompt: 'name to say hi',
                    type: 'string',
                }
            ]
        });
    }

    run(message, { name }) {
        message.reply('Hello ' + name);
    }
};