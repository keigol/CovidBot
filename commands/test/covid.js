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
        // TODO make sure date is right format otherwise reply with error message
        var regEx = new RegExp('^\d{1,2}/\d{1,2}/\d{4}$');

        message.reply('finding data for ' + date + "...")
        scraper.scrape(date).then(function (response) {
            message.reply(response);
        })
    }
};