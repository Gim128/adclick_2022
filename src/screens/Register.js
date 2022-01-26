import React, {useState} from 'react';
import '../App.css';
import styles from '../assets/css/Register.css';
import '../assets/validation/RegisterValidate';
import useForm from './../screens/useForm';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox} from '@mui/material';
import TextField from '@mui/material/TextField';

// export default function Register() {
//     return <h1 className='register'></h1>
// }

const Register = ({submitForm}) => {

    const {handleChange, handleFormSubmit, values, errors} = useForm(submitForm);

    return (
        <>
            {/* <HeroSection /> */}
            <div className={"container"}>

                <div className="row">
                    <center>
                        <div className='avatar-one'>
                            <img
                                src='https://i.ibb.co/hBLdcX0/modern-design-register-now-text-speech-bubbles-concept-vector-illustration-189143580-removebg-previe.png'/>
                        </div>
                    </center>
                </div>

                <div className="row m-4">
                    <center>
                        <div className='avatar'>
                            <img src='https://img.icons8.com/ios/344/add-user-male.png'/>
                        </div>
                    </center>
                </div>

                <div className="row">
                    <form action="">
                        <div className="in-text">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="txtFirstName"
                                       placeholder="FIRST NAME"/>
                                <label htmlFor="txtFirstName">FIRST NAME</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="txtLastName"
                                       placeholder="LAST NAME"/>
                                <label htmlFor="txtLastName">LAST NAME</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="txtEmail"
                                       placeholder="EMAIL"/>
                                <label htmlFor="txtEmail">EMAIL</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="txtMobileNo"
                                       placeholder="MOBILE NO."/>
                                <label htmlFor="txtMobileNo">MOBILE NO.</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="txtPassword"
                                       placeholder="PASSWORD"/>
                                <label htmlFor="txtPassword">PASSWORD</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="txtConfirmPassword"
                                       placeholder="CONFIRM PASSWORD"/>
                                <label htmlFor="txtConfirmPassword">CONFIRM PASSWORD</label>
                            </div>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree to the <a href="">terms & conditions</a>
                            </label>
                        </div>
                        <div>
                            <center>
                                <button className="btn btn-outline-secondary mb-3" type="submit">REGISTER</button>
                            </center>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <center>
                        <p>Already Have Account? <a href="">SIGN IN</a></p>
                    </center>
                </div>

            </div>
            {/* <footer /> */}
        </>
    )

};

export default Register;
