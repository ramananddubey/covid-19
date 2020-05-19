import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, form, input, button, nav } from 'react-bootstrap';
import styles from './HHF.module.css';
import fire from './../Database/postData'
import swal from 'sweetalert';


const Header = () => {

    const logout = (e) => {
        e.preventDefault();
        fire.auth().signOut();
        swal("You have Loged out", {
            icon: "warning",
        });

    }
    return (
        <Navbar className={styles.headerbg} expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    <h5 className={styles.companyName}><span style={{ color: 'red' }}>COVID19</span><span style={{ color: 'rgb(30,144,255)' }}>Tracker</span></h5>
                    <NavLink className={styles.linkstyle} to="/">Home</NavLink>
                    <NavLink className={styles.linkstyle} to="/global">Global COVID19</NavLink>
                    <NavLink className={styles.linkstyle} to="/States">India COVID19</NavLink>
                    <NavLink className={styles.linkstyle} to="/auth">Login</NavLink>

                    <form className={styles.linkstyle}>
                        <input class="form-control mr-sm-2 mb-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={logout.bind(this)} class="btn btn-outline-success my-2 my-sm-0" type="submit" >Logout</button>

                    </form>

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )
}
export default Header;