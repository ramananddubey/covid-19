import React, { useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api'
const CountryPicker = ({ handleCountryChange }) => {
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() =>{
        const fetchedCountries = async () =>{
            setCountriesData(await fetchCountries());
        }
        fetchedCountries();
    }, [setCountriesData]);
    //console.log("countries name :",countriesData);

    return(
        <div className = {styles.formControl}>
           <FormControl>
               <NativeSelect defaultValue ="" onChange = {(e) => handleCountryChange(e.target.value)}>
                   <option value = "">Global</option>
                   {countriesData.map((country,i) => <option key ={i} value= {country}>{country}</option>)}
               </NativeSelect>
           </FormControl>
        </div>
    )
}
export default CountryPicker;