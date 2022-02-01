import React from 'react';
//import { Grid, Paper } from '@mui/material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../App.css';
import '../assets/css/Contact.css';
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import {Form, Button} from 'react-bootstrap';

// export default function Contact() {
//     return <h1 className='contact'>Contact-Us</h1>
// }
const Contact = () => {

    return (
        <>
            {/* <HeroSection /> */}
            <div className="container-fluid contact-us">
                <div className="row p-2">
                    <div className="google-map-code">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.82936625638!2d79.9045866!3d6.713908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c7e1b70e52673bc!2sGowoma%20Solutions!5e0!3m2!1sen!2slk!4v1643746885611!5m2!1sen!2slk"
                            width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>

                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-sm">
                        <div className="row">
                            <center><h3>Contact Us</h3></center>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <center>
                                    <img className="img-c" src='https://img.icons8.com/ios/452/marker--v1.png' alt=''/>
                                    <h5><span>Address</span></h5>
                                    <p>No.90, colombo 7, Colombo</p>
                                </center>
                            </div>
                            <div className="col-sm">
                                <center>
                                    <img className="img-c" src='https://img.icons8.com/ios/344/secured-letter--v1.png'
                                         alt=''/>
                                    <h5><span>Phone</span></h5>
                                    <p>No.90, colombo 7, Colombo</p>
                                </center>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <center>
                                    <img className="img-c" src='https://img.icons8.com/ios/452/marker--v1.png' alt=''/>
                                    <h5><span>Address</span></h5>
                                    <p>No.90, colombo 7, Colombo</p>
                                </center>
                            </div>
                            <div className="col-sm">
                                <center>
                                    <img className="img-c" src='https://img.icons8.com/ios/344/secured-letter--v1.png'
                                         alt=''/>
                                    <h5><span>Phone</span></h5>
                                    <p>No.90, colombo 7, Colombo</p>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <center><h3>Write to us</h3></center>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <div className="mb-3">
                                    <label htmlFor="txtFName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="txtFName"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="txtEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="txtEmail"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="txtMsg" className="form-label">Message</label>
                                    <textarea className="form-control" id="txtMsg" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <footer /> */}
        </>
    )
}

export default Contact;
