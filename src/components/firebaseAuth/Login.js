import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import fire from '../../Database/postData';
import styles from './login.module.css';
import swal from 'sweetalert';
import { connectSortBy } from 'react-instantsearch-dom';

class Login extends Component {
  state = {
    Email: '',
    Password: '',
    EmailError: '',
    PassError: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      Email: event.target.value,
      Password: event.target.value
    });



  }

  valid() {
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if ((!this.state.Email.includes('@') || !this.state.Email.includes('.com')) && (!this.state.Password.match(passw))) {
      // this.setState({ EmailError: "Invalid Email formate" });
      // this.setState({PassError:"Please enter strong password"});
      return "False";
    }
    else if ((this.state.Email.includes('@') && this.state.Email.includes('.com')) && this.state.Password.match(passw)) {
      return "True";
    }
    else if ((this.state.Email.includes('@') && this.state.Email.includes('.com')) && (!this.state.Password.match(passw))) {

      return "FalsePass";
    }
    else if (((!this.state.Email.includes('@') || !this.state.Email.includes('.com'))) || (!this.state.Email.includes('@') && !this.state.Email.includes('.com')) && (this.state.Password.match(passw))) {
      return "FalseEmail";
    }


  }

  componentDidMount() {
    this.authListener();
  }
  authListener(e) {
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    fire.auth().onAuthStateChanged((user) => {
      // console.log(user.email);
      if (user) {
        if ((user.email === this.state.Email) && this.state.Password.match(passw)) {


          swal("Login Success", {
            icon: "success",
          });
        } else if ((user.email !== this.state.Email)) {
          this.setState({ EmailError: "Invalid Email", Email: "" })

          swal("Login Failed", {
            icon: "error",
          });
        }
        else if (this.state.Email === '' && this.state.Password === '') {
          this.setState({ EmailError: "Please Enter Email", PassError: "Please Enter Password" });
        }
      }
      else if (!user) {
        swal("Please do signUp before login", {
          icon: "warning",
        });

      }
      else {
        console.log("error")
      }

    });
  }

  signup(e) {
    e.preventDefault();
    var validate = this.valid();
    if (validate === "False") {
      swal("Invalid Credential Formate ", {
        icon: "error",
      });
      this.setState({ Email: "", Password: "", EmailError: "Invalid email", PassError: "Please Enter strong password" })

    }
    else if (validate === "FalsePass") {
      swal("Invalid password ", {
        icon: "error",
      });
      this.setState({ PassError: "Please Enter strong password", Password: "" })

    }
    else if (validate === "FalseEmail") {
      swal("Invalid Email", {
        icon: "error",
      });
      this.setState({ EmailError: "please Enter Valid Email", Email: "" })

    }
    else if (validate === "True") {
      swal("SignUp Success", {
        icon: "success",
      });

      var sigup = fire.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password).then((nu) => {

        //console.log(user.email);
      }).catch((error) => { console.log(error) });

    }
    else {
      console.log("error");
    }
    //this.setState({EmailError:"",PassError:""})

  }



  render() {

    return (
      <div className={styles.container} >
        <h3 className={styles.h3self}>Welcome </h3>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label >Enter User Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="username@gmail.com"
                value={this.state.Email}
                onChange={(e) => this.setState({ Email: e.target.value, EmailError: "" })}
              />
              <p style={{ color: 'red' }}>{this.state.EmailError}</p>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password ex :1wrf.$2/#"
                value={this.state.Password}
                onChange={(e) => this.setState({ Password: e.target.value, PassError: "" })}
                required
              />
              <p style={{ color: 'red' }} >{this.state.PassError}</p>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center" md="1">
            <Button className={styles.Login} as={Col} md="1" onClick={this.authListener.bind(this)} type="submit" >Login</Button>
            <Button className={styles.signup} as={Col} md="1" type="submit" onClick={this.signup.bind(this)}>SignUp</Button>
          </Form.Row>

        </Form>

      </div>
    )
  }

}
export default Login;