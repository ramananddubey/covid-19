import React from 'react';
import States from './components/States/States';
import Header from './components/Header';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer';
import SelfAssessment from './components/SelfAssessment/SelfAssessment';
import Login from './components/firebaseAuth/Login';
import fire from './Database/postData';
import Contact from './components/contactUs/ContactUS'
import News from './components/News/Newscovid'
import HomeHero from './components/HomeHeros/card'
import HomePage from './components/HomePage'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }

    }
    // componentDidMount(){
    //     this.authListener();
    // }
    // authListener()
    // {
    //     fire.auth().onAuthStateChanged((user) => {
    //         console.log(user.email);
    //         if(user){
    //             this.setState({user})
    //         }else{
    //             this.setState({user:null})
    //         }

    //     });
    // }



    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/global" component={Home} exact />
                        <Route path="/" component={HomePage} exact />
                        <Route path="/auth" component={Login} exact />
                        <Route path="/States" component={States} exact />
                        <Route path="/Assessment" component={SelfAssessment} exact />
                        <Route path="/contactus" component={Contact} exact />
                        <Route path="/news" component={News} exact />

                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>

        );
    }
}
export default App;