const request = require('request');

const url = 'https://api.darksky.net/forecast/fc2044bdaa450ea332cdf82740665a01/37.8267,-122.4233?units=si&lang=es';

request({
    url: url,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + ' % chance of rain');
    }
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bogota.json?access_token=pk.eyJ1IjoiYWFsYmE5MyIsImEiOiJjanQxcWtlcjgwZXkxNDRtbzBiZXI1cDM3In0.xRXvvJtUvEJL4tFdERfp7Q&limit=1';

request({
    url: geocodeURL,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search');
    } else {
        const latitue = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitue, longitude);
    }
    
});