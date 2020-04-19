import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';
export const fetchData = async (country) => {
    try{
        let changableURL = url;
        if(country)
        {
            changableURL =`${url}/countries/${country}`;
        }
        const { data: { confirmed, recovered, deaths, lastUpdate } }= await axios.get(changableURL);
        // const modifieData = {
        //     confirmed:confirmed,
        //     recovered:recovered,
        //     deaths:deaths,
        //     lastUpdate:lastUpdate
        // }
        return { confirmed, recovered, deaths, lastUpdate } ;
    }
    catch(error)
    {
        console.log(error);
        
    }

}
export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
                confirmed:dailyData.confirmed.total,
                deaths:dailyData.deaths.total,
                date:dailyData.reportDate,
            }
        ));

       return modifiedData;
    } catch (error) {
        console.log(error);
        
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        //console.log(response);
        return countries.map((country) => country.name);
        
    } catch (error) {
        console.log(error);
    }
}