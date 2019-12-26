const axios = require('axios');

const getPlaceLatLon = async direction => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURI(direction) }`,
        headers: { 'x-rapidapi-key': '358a4426a6mshcd5e3236bace69dp19a3cajsn63df542c7a24' }
    });
    const resp = await instance.get();
    const data = resp.data.Results[0];
    if (!data) throw new Error(`No results for ${ direction }`);
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return { name, lat, lon }
}

module.exports = { getPlaceLatLon }