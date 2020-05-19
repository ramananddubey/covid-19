import React, { Component } from 'react';
import { Form, InputGroup, Col, Button } from 'react-bootstrap';
import fire from '../../Database/postData';
import styles from './contactus.module.css';
import swal from 'sweetalert';


class SelfAssessment extends Component {
  state = {
    FirstName: '',
    LsatName: '',
    Email: '',
    Subject: '',
    EmailError: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const Data = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Subject: this.state.Subject,
    };
    const sendFireData = fire.database().ref('CotactUSDetails').orderByKey().limitToLast(100);
    fire.database().ref("CotactUSDetails").push(Data);


  }

  valid() {
    if (!this.state.Email.includes('@') || !this.state.Email.includes('.com')) {
      this.setState({ EmailError: "Invalid Email" });
      return "False";
    }
    else {
      return "True";
    }


  }

  submit() {
    var togle = this.valid();
    if (togle === "True") {
      swal("Information has been submited", { dangerMode: true, buttons: true, icon: "success" });
    }
    else if (togle === "False") {
      swal("You have entered Wrong email", { dangerMode: true, buttons: true, icon: "error" });
    }
    this.setState({ FirstName: "", LastName: "", Email: "", Subject: "" });
  }




  render() {

    return (
      <div className={styles.container} >
        <div >
          {/* <img src = {covid} alt ="COVID-19"/> */}

        </div>
        <h3 className={styles.h3self}>Contact US</h3>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="2" controlId="validationCustom01">
              <Form.Label >First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter First name"
                value={this.state.FirstName}
                onChange={(e) => this.setState({ FirstName: e.target.value })}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom02">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Last Name"
                value={this.state.LastName}
                onChange={(e) => this.setState({ LastName: e.target.value })}
              // defaultValue="Otto"
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustomUsername">
              <Form.Label>Enter Your Email-Id</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Email-Id"
                  aria-describedby="inputGroupPrepend"
                  value={this.state.Email}
                  onChange={(e) => this.setState({ Email: e.target.value })}
                  required
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="textarea"
                type="text"
                placeholder="Type here subject..."
                value={this.state.Subject}
                onChange={(e) => this.setState({ Subject: e.target.value })}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center" md="1">
            <Button className={styles.close} onClick={this.submit.bind(this)} type="submit">Send Info</Button>
          </Form.Row>

        </Form>
      </div>
    )
  }

}
export default SelfAssessment;