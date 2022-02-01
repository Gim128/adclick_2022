import React from 'react';
//import { Grid, Paper } from '@mui/material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../App.css';
import { Form, Button  } from 'react-bootstrap';

// export default function Contact() {
//     return <h1 className='contact'>Contact-Us</h1>
// }
const Contact = () => {

    return(
    <>
        {/* <HeroSection /> */}
        <div className='conatiner'>
            <div className='RectangleBg'>

            <div className='upperBg'> 
                <h2>CONTACT US</h2>
            </div>

            </div>

            <div className='maps'>

                <div className='col-12'>
               
                </div>

                <div className='container'>
                <div className="row-col-md-6">
                    <div class="col-md-3">
                        <h1><span>Contact Us</span></h1>
                        <img src='https://img.icons8.com/ios/452/marker--v1.png' alt=''/>
                        <h5><span>Address</span></h5>
                        <p>No.90, colombo 7, Colombo</p>
                    </div>
                    <div className="col-md-3">
                    <h1><span>Contact Us</span></h1>
                        <img src='https://img.icons8.com/ios/344/phone-not-being-used.png' alt=''/>
                        <h5><span>Phone</span></h5>
                        <p>+94 774954012</p>
                        <p>+94 766223217</p>
                    </div>
                    <div className="col-md-3">
                    <h1><span>Email</span></h1>
                        <img src='https://img.icons8.com/ios/344/secured-letter--v1.png' alt=''/>
                        <h5><span>Phone</span></h5>
                    </div>
                    <div className="col-md-3">
                    <h1><span>Contact Us</span></h1>
                        <img src='https://img.icons8.com/ios/344/online-support.png' alt=''/>
                        <h5><span>Working Hours</span></h5>
                        <p>every weakdays</p>
                        <p>9am to 6pm</p>
                    </div>
                </div>
                </div>


                <div row-col-md-6>
                    <h1>Write To Us</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name: </Form.Label>
                            <Form.Control type="text" placeholder="Full" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                </div>
            </div>

            

        </div>
       

        


        
        {/* <footer /> */}
    </>
    )
}

export default Contact;