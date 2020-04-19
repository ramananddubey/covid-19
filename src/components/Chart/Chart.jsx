import React, { useState, useEffect} from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar} from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart = ({ data: { confirmed,recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
       // console.log("daily data : ",dailyData);
        fetchAPI();

    });
    //console.log("daily data : ",dailyData);

    const LineChart = (
        dailyData.length
        ?(<Line
             data = {{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                 data: dailyData.map(({ confirmed }) => confirmed),
                 label:'Infected',
                 borderColor:'#3333ff',
                 fill:true,

                },
                {
                    data:dailyData.map(({ deaths }) => deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
   
                   }],
               
            }
        }
        />): null

    );

    const barChart = (
        confirmed
        ?(
        <Bar 
        data = {{
            labels:["Infected","Recovered","Deaths"],
            datasets:[{
                label:"People",
                backgroundColor:['rgba(0, 0, 255, 0.986)','rgba(9, 201, 9, 0.925)','rgba(248, 5, 5)'],
                data:[confirmed.value,recovered.value,deaths.value]
            }]

        }}
        options = {{
            legend:{display:false},
            title:{display:true,text:`Current Status In ${country}`}
        }}
        
        />): null
    )

    return(
        <div className = {styles.container}>
           {country ? barChart:LineChart}
        </div>
    )
}
export default Chart;