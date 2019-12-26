const axios = require('axios');

const getWeather = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=8f3d559d904e28512a382756ce5c9140&units=metric`);
    return resp.data.main.temp;
}

module.exports = { getWeather }