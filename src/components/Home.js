import React from 'react';
import { Cards, Chart, CountryPicker } from './index';
import { fetchData, fetchStatesData } from '../api';
import styles from '../App.module.css';
import covid from '../images/covid-19.png';


class Home extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchdata = await fetchData();
        // console.log("Fetch data:",fetchdata);
        this.setState({ data: fetchdata });
    }

    handleCountryChange = async (country) => {
        const fetchdata = await fetchData(country);
        this.setState({ data: fetchdata, country: country });
        //console.log("fetched country data : ",fetchdata);
    }


    render() {
        const { data, country } = this.state;

        return (


            <div className={styles.container}>

                <img className={styles.image} src={covid} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker
                    handleCountryChange={this.handleCountryChange}
                />
                <Chart data={data} country={country} />



            </div>

        );
    }
}
export default Home;