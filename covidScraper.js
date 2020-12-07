const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.ctvnews.ca/mobile/health/coronavirus/tracking-every-case-of-covid-19-in-canada-1.4852102';

module.exports = {
  scrape: function (date) {
    var response;
    rp(url)
      .then(function (html) {
        //success!

        var bcText = $('#british-columbia-collapse', html).text();

        var regEx = new RegExp(date, 'i'); // TODO create regex to find number of cases given date
        var array = bcText.match(regEx);
        console.log(array[0]);

        response = array[0];
      })
      .catch(function (err) {
        console.log('error scraping');;
        response = 'error';
      });
      return response; // TODO need to wait to return?
  }
}
