import React, { Component } from 'react';
import { Form, InputGroup, Col, Row, Button } from 'react-bootstrap';
import fire from '../../Database/postData';
import ShowAlert from './Alert'
import styles from './SelfAssessment.module.css';
import covid from '../../images/covid-19.png';
import swal from 'sweetalert';

class SelfAssessment extends Component {
  state = {
    Name: '',
    Symptoms: '',
    PastDisease: '',
    TravelHistory: '',
    IntractCovid: '',
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const Data = {
      Name: this.state.Name,
      Symptoms: this.state.Symptoms,
      PastDisease: this.state.PastDisease,
      TravelHistory: this.state.TravelHistory,
      IntractCovid: this.state.IntractCovid,
    };

    //console.log("firebase url",Data);
    if (Data.Name && Data.Symptoms && Data.PastDisease && Data.TravelHistory && Data.IntractCovid) {
      const sendFireData = fire.database().ref('SelfAssessment').orderByKey().limitToLast(200);
      fire.database().ref("SelfAssessment").push(Data);
      swal("Self-Assessment has been submited", { dangerMode: true, buttons: true, icon: "success" });
    }
    else {
      swal("Please Enter Details", { icon: "warning", });
    }
    this.setState({ Name: "", Symptoms: "", PastDisease: "", TravelHistory: "", IntractCovid: "" });


  }

  // logout(e){
  //  var session = fire.auth().signOut();
  //  console.log("session : ",session);
  //  if(session)
  //  {
  //   swal("Login Session Closed",{button: {text: "OK",},});
  //  }
  //  else{
  //   swal("You have already loged out",{ button: { text: "OK",},});
  //  }

  // }

  //  showalert =(e) =>{
  //    e.preventDefault();
  //    if(e)
  //    {
  //     swal("Are You Sure ?", {dangerMode: true,buttons: true,icon:"success"});

  //    }
  //   else
  //   {
  //     swal("Please Enter Details",{icon: "warning",});
  //   }
  //   // this.setState({Name:"",Symptoms:"",Location:"",TravelHistory:"",IntractCovid:""});
  //   }

  render() {

    return (
      <div className={styles.container} >
        <div >
          {/* <img src = {covid} alt ="COVID-19"/> */}

        </div>
        <h3 className={styles.h3self}>Take Self-Assessment!</h3>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form className="justify-content-center">
            <Form.Group md="2" controlId="exampleForm.ControlInput1">
              <Form.Label >Tell Me Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={this.state.Name}
                onChange={(e) => this.setState({ Name: e.target.value })}
              // defaultValue="Mark"
              />
            </Form.Group>
            <Form.Group md="2" controlId="exampleForm.ControlInput2">
              <Form.Label>Are you experiencing any of the following symptoms?</Form.Label>
              {/* <Form.Control
                required
                type="text"
                placeholder="like cough , fever"
                value={this.state.Symptoms}
                onChange={(e) => this.setState({ Symptoms: e.target.value })}
              // defaultValue="Otto"
              /> */}
              <Form.Control as="select"
                value={this.state.Symptoms}
                onChange={(e) => this.setState({ Symptoms: e.target.value })} >
                <option>Select below options</option>
                <option>Cough</option>
                <option>Fever</option>
                <option>Difficulty in Breathing</option>
                <option>Muscle pain</option>
                <option>None of the Above</option>
              </Form.Control>
            </Form.Group>
            <Form.Group md="2" controlId="exampleForm.ControlInput3">
              <Form.Label>have you ever had any of the following?</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                </InputGroup.Prepend>
                {/* <Form.Control
                  type="text"
                  placeholder="Enter Location"
                  aria-describedby="inputGroupPrepend"
                  value={this.state.Location}
                  onChange={(e) => this.setState({ Location: e.target.value })}
                  required
                /> */}

                <Form.Control as="select"
                  value={this.state.PastDisease}
                  onChange={(e) => this.setState({ PastDisease: e.target.value })} >
                  <option>Select below options</option>
                  <option>Diabetes</option>
                  <option>Hypertension</option>
                  <option>Lung disease</option>
                  <option>Heart Disease</option>
                  <option>None of the Above</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Form>
          <Form className="justify-content-center">
            <Form.Group md="2" controlId="exampleForm.ControlInput4">
              <Form.Label>Heve you traveled anywhere internationally in the last 30-55 days?</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="like us, itely,china"
                value={this.state.TravelHistory}
                onChange={(e) => this.setState({ TravelHistory: e.target.value })}
                required
              /> */}
              <Form.Control as="select"
                value={this.state.TravelHistory}
                onChange={(e) => this.setState({ TravelHistory: e.target.value })}>
                <option>Select below options</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>
            <Form.Group md="4" controlId="exampleForm.ControlInput5">
              <Form.Label>Are You Interacted  or lived with someone who has tested positive for COVID-19?</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Enter YES/NO"
                value={this.state.IntractCovid}
                onChange={(e) => this.setState({ IntractCovid: e.target.value })}
                required
              /> */}
              <Form.Control as="select"
                value={this.state.IntractCovid}
                onChange={(e) => this.setState({ IntractCovid: e.target.value })}
              >
                <option>Select below options</option>
                <option>Yes</option>
                <option>No</option>
                <option>Don't know</option>

              </Form.Control>
            </Form.Group>
          </Form>
          <Form className="justify-content-center" md="1">
            <Button className={styles.close} type="submit">Submit Assessment</Button>
            {/* <Button className = {styles.close} onClick ={this.logout.bind(this)}> Close Assessment</Button> */}
          </Form>

        </Form>
        <ShowAlert aessdata={this.state} />
      </div>
    )
  }

}
export default SelfAssessment;