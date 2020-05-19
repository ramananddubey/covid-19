import React, { useState, useEffect } from 'react';
import { Alert, Heading, Button } from 'react-bootstrap';
import styels from './Aler.module.css'
const ShowAlert = (props) => {
  const [show, setShow] = useState(true);
  //console.log("Alert props : ",props);
  var resultsAssess = showAssessment(props);
  return (
    <div className={styels.container}>
      <Alert show={show} variant="success">
        <Alert.Heading>Here Is Your Assessment Result!</Alert.Heading>
        <p>
          {resultsAssess}
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me ya'll!
                </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
  );

}
export default ShowAlert;
function showAssessment(PropsData) {
  var disease = [
    "Fever",
    "Cough",
    "Muscle pain",
    "Difficulty in Breathing",
    // "None of the Above",
  ];

  var travelHistory = [
    "Yes"

  ]
  var pastDisease = [
    "Diabetes",
    "Hypertension",
    "Lung disease",
    "Heart Disease",
    // "None of the Above"
  ]
  var livedWithSomeOne = ["Yes"];
  var nonOf = ["None of the Above", "No", "Don't know"]

  //console.log("travel data :",PropsData.data.TravelHistory);
  if (pastDisease.indexOf(PropsData.aessdata.PastDisease) !== -1 && travelHistory.indexOf(PropsData.aessdata.TravelHistory) !== -1 && disease.indexOf(PropsData.aessdata.Symptoms) !== -1 && livedWithSomeOne.indexOf(PropsData.aessdata.IntractCovid) !== -1) {
    return `${PropsData.aessdata.Name}, You are at high risk condtions Please Concern with the nearest Doctor as soon as possible and take precautions(wear mask,senitize yourself,social distancing,quarantine).`
  }
  else if (travelHistory.indexOf(PropsData.aessdata.TravelHistory) !== -1 && livedWithSomeOne.indexOf(PropsData.aessdata.IntractCovid) !== -1 && disease.indexOf(PropsData.aessdata.Symptoms) !== -1) {
    return `${PropsData.aessdata.Name},Your condition is a little bit high, Please take Home Quarantine and Keep social distancing!`
  }
  else if (disease.indexOf(PropsData.aessdata.Symptoms) !== -1 && nonOf.indexOf(PropsData.aessdata.PastDisease) !== -1 && nonOf.indexOf(PropsData.aessdata.TravelHistory) !== -1 && nonOf.indexOf(PropsData.aessdata.IntractCovid) !== -1) {
    return `${PropsData.aessdata.Name}, You are at low risk conditions, Please take Home Quarantine and Keep social distancing and regularly sanitize yourself!.`;
  }
  else if ((nonOf.indexOf(PropsData.aessdata.PastDisease) !== -1 && nonOf.indexOf(PropsData.aessdata.TravelHistory) !== -1 && nonOf.indexOf(PropsData.aessdata.IntractCovid) !== -1 && nonOf.indexOf(PropsData.aessdata.Symptoms) !== -1)) {
    return `${PropsData.aessdata.Name}, You are safe because You Don't have any symptoms, Please take Home Quarantine and Keep social distancing.`;

  }
  else if (pastDisease.indexOf(PropsData.aessdata.PastDisease) !== -1 && travelHistory.indexOf(PropsData.aessdata.TravelHistory) !== -1 && disease.indexOf(PropsData.aessdata.Symptoms) !== -1 && nonOf.indexOf(PropsData.aessdata.IntractCovid) !== -1) {
    return `${PropsData.aessdata.Name}, You are at high risk condtions Please Concern with the nearest Doctor as soon as possible and take precautions`
  }
  else if (pastDisease.indexOf(PropsData.aessdata.PastDisease) !== -1 && nonOf.indexOf(PropsData.aessdata.TravelHistory) !== -1 && disease.indexOf(PropsData.aessdata.Symptoms) !== -1 && livedWithSomeOne.indexOf(PropsData.aessdata.IntractCovid) !== -1) {
    return `${PropsData.aessdata.Name}, You are at high risk condtions Please Concern with the nearest Doctor as soon as possible and take precautions`
  }
  else if (disease.indexOf(PropsData.aessdata.Symptoms) !== -1 && pastDisease.indexOf(PropsData.aessdata.PastDisease) !== -1 && travelHistory.indexOf(PropsData.aessdata.TravelHistory) === -1) {
    return `${PropsData.aessdata.Name}, there are a change of Infection of covid-19, Please concern with Doctor, and take Home Quarantine and Keep social distancing and regularly sanitize yourself!.`;

  }
  else {
    return `${PropsData.aessdata.Name},  take self-assessment so that you can prevent yourself and others from covid-19`

  }

}