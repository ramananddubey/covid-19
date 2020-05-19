import React, { useState, useEffect } from 'react';
import { Alert, Heading, Button } from 'react-bootstrap';
import styels from './Aler.module.css'
import { showAssessment } from './AssessmentResult'
const ShowAlert = (props) => {
  const [show, setShow] = useState(true);
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

      {!show && <Button onClick={() => setShow(true)}>Show Me</Button>}
    </div>
  );

}
export default ShowAlert;