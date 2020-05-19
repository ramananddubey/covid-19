import React, { useState, useEffect } from 'react';
import styles from './states.module.css';
import { fetchStatesData } from '../../api';
import { Table } from 'react-bootstrap';
import CountUp from 'react-countup';

const States = () => {
    const [stateData, setStateData] = useState([]);
    useEffect(() => {
        const fetchStateAPI = async () => {
            setStateData(await fetchStatesData());
        }
        fetchStateAPI();
    }
    );
    //console.log("states page log ",stateData);
    return (
        <div className={styles.container}>
            <br></br>
            <h4>IndiaFightsCorona COVID-19</h4>
            <p className={styles.para}>Government of India is taking all necessary steps to ensure that we are prepared well to face the challenge and threat posed by the growing pandemic of COVID-19 the Corona Virus. With active support of the people of India, we have been able to contain the spread of the Virus in our country. The most important factor in preventing the spread of the Virus locally is to empower the citizens with the right information and taking precautions as per the advisories being issued by Ministry of Health & Family Welfare</p>
            <h1 className={styles.h1tag}><span style={{ color: 'red' }}>Live.</span> Covid19 Status In India </h1>
            <Table className="mt-1 mb-none" striped bordered hover responsive size="sm" variant="dark">
                <thead>
                    <tr>
                        <th className={styles.tableHead}>#</th>
                        <th className={styles.tableHead}>Last Updated Time</th>
                        <th className={styles.tableHead}>States</th>
                        <th className={styles.tableHead}>Confirmed Case</th>
                        <th className={styles.tableHead}>Recovered Case</th>
                        <th className={styles.tableHead}>Deaths Case</th>
                        <th className={styles.tableHead}>Active Case</th>
                    </tr>
                </thead>
                <tbody>
                    {stateData.map((stateWiseData, i) =>
                        <tr key={i}>
                            <td class="bg-secondary">{i}</td>
                            <td className={styles.tableData}>{stateWiseData.lastupdatedtime}</td>
                            <td className={styles.tableData2}>{stateWiseData.state}</td>
                            <td class="bg-primary">
                                {/* //{stateWiseData.confirmed} */}
                                <CountUp
                                    start={0}
                                    end={stateWiseData.confirmed}
                                    duration={2.5}
                                    separator=","
                                />

                            </td>
                            <td class="bg-success">
                                {/* {stateWiseData.recovered} */}
                                <CountUp
                                    start={0}
                                    end={stateWiseData.recovered}
                                    duration={2.5}
                                    separator=","
                                />

                            </td>
                            <td class="bg-danger">
                                {/* {stateWiseData.deaths} */}
                                <CountUp
                                    start={0}
                                    end={stateWiseData.deaths}
                                    duration={2.5}
                                    separator=","
                                />

                            </td>
                            <td class="bg-info">
                                {/* {stateWiseData.active} */}
                                <CountUp
                                    start={0}
                                    end={stateWiseData.active}
                                    duration={2.5}
                                    separator=","
                                />

                            </td>
                        </tr>
                    )}
                </tbody>

            </Table>
        </div>
    )
}
export default States;
