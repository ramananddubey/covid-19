import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker'
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import covid from './images/covid-19.png';
 
class App extends React.Component{
    state = {
        data:{},
        country:'',
    }
    async componentDidMount()
    {
        const fetchdata = await fetchData();
       // console.log("what data is :",data);
        this.setState({ data:fetchdata });
    }

    handleCountryChange = async (country) => {
        const fetchdata = await fetchData(country);
        this.setState({ data:fetchdata, country:country });
        //console.log("fetched country data : ",fetchdata);
    }
    render (){
        const { data, country } = this.state;
        return(
            <div className = {styles.container}>
                <img className = {styles.image} src = {covid} alt ="COVID-19"/>
                <Cards data = {data}/>
                <CountryPicker 
                       handleCountryChange ={this.handleCountryChange}
                />
                <Chart data = {data} country = {country}/>
                
            
            </div>
        );
    }
}
export default App;