import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const data = await axios.get(url);
        const realData = {
            confirmed: data.data.confirmed,
            recovered: data.data.recovered,
            deaths: data.data.deaths,
            lastUpdate: data.data.lastUpdate
        }
        return realData;
    } catch (error) {

    }
}


export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
};


export const country = async () => {
    try {
        const data = await axios.get(`${url}/countries`);
        const updatedData = [...data.data.countries].map(data => data.name);
        return updatedData;
    }
    catch (error) {

    }
}





export const fetchCountry = async (country) => {
    try {
        let turl = url;
        turl = url + "/countries/" + country;
        const data = await axios.get(turl);
        const realData = {
            country : country,
            confirmed: data.data.confirmed,
            recovered: data.data.recovered,
            deaths: data.data.deaths,
            lastUpdate: data.data.lastUpdate
        }
       
        return (realData);
        // console.log(realData);

    }
    catch (error) {

    }
}


// export  fetchData, fetchDailyData;