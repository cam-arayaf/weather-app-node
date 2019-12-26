const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'City address to get the weather',
        demand: true
    }
}).argv;

const place = require('./place/place');
const weather = require('./weather/weather');

const getData = async direction => {
    try {
        const coords = await place.getPlaceLatLon(direction);
        const temp = await weather.getWeather(coords.lat, coords.lon);
        return `Place: ${ coords.name } / Weather: ${ temp }°C`;
    } catch (error) {
        return `Place: ${ direction } / Weather: Not found`;
    }
}

getData(argv.direction).then(console.log).catch(console.log);