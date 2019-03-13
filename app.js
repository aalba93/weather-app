const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + ' % chance of rain');
//     }
// });

geocode('Philadelphia', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })