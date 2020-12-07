const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.ctvnews.ca/mobile/health/coronavirus/tracking-every-case-of-covid-19-in-canada-1.4852102';

module.exports = {
  scrape: async function (date) {
    var response = 'oop no information for that date';
    return rp(url)
      .then(function (html) {
        //success!
      
        let bcInfo = $('#british-columbia-collapse', html).text();
        let dateArray = bcInfo.split("\n");

        for (let i = 0; i < dateArray.length; i++) {
          let text = dateArray[i].trim();
          if (text.startsWith(date)) {
            response = text;
          }
        }
        return response;
      })
      .catch(function (err) {
        console.log('error scraping');;
        response = 'error';
        return response;
      });
  }
}
