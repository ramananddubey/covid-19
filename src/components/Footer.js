import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './HHF.module.css';

const Footer = () => {
    return (
        <div >


            <Navbar className={styles.headerbg} expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav >
                        <NavLink className={styles.linkstyle} to="/contactus">Contact US</NavLink>
                        <NavLink className={styles.linkstyle} to="/">Follow Me</NavLink>
                        <NavLink className={styles.linkstyle} to="/Assessment">Self-Assessment</NavLink>
                        <NavLink className={styles.linkstyle} to="/news">News Covid-19</NavLink>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <div >

                <p className={styles.copyright} xs={12}>Copyright ©2020 Covid19Tracker, All rights reserved, Developed by Ramanand Dubey</p>
            </div>




        </div>



    )
}
export default Footer;