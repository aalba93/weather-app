const request = require('request');

const url = 'https://api.darksky.net/forecast/fc2044bdaa450ea332cdf82740665a01/37.8267,-122.4233';

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});