const { Command } = require('discord.js-commando');
const scraper = require('../../covidScraper');

// Command export
module.exports = class CovidCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'covid',
            group: 'test',
            memberName: 'covid',
            description: 'Gives covid information',
            args: [
                {
                    key: 'date',
                    prompt: 'what date?',
                    type: 'string',
                }
            ]
        });
    }

    run(message, { date }) {
        message.reply('finding data for ' + date + "...")
        message.reply(scraper.scrape(date));
    }
};