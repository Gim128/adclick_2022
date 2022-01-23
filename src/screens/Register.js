import React, {useState} from 'react';
import '../App.css';
import styles from  '../assets/css/Register.css';
import '../assets/validation/RegisterValidate';
import useForm from './../screens/useForm';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@mui/material';

// export default function Register() {
//     return <h1 className='register'></h1>
// }

const Register = ({ submitForm }) => {

    const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);

    return(
    <>
        {/* <HeroSection /> */}
        <div className={"container"} style= {{
                backgroundImage: `url("https://ibb.co/pPCT7fH")`
            }}>

                <div className='avatar'>
                    <img  src='https://drive.google.com/file/d/1qFGl2TX55-hU4roI0lwMvU7kKXTgkvuX/view?usp=sharing'/>
                </div>

                <div className='avatar'>
                    <img  src='https://img.icons8.com/ios-filled/344/client-management.png'/>
                </div>    

            <div className='app-wrapper'>
                <img src=',/img/reg(1).png' alt=''/>
            </div>
             <div className='app-wrapper-1'>
                <img src=',/img/reg(2).png' alt=''/>
            </div>
            <form className='form-wrapper'>
                <div className={"fname"}>
                    <label className='label'>FIRST NAME :</label>
                    <input className='input' 
                    type="text" 
                    name='firstname' 
                    value={values.fname} 
                    onChange={handleChange}
                    />
                    {errors.fname && <p className='error'>{errors.fname}</p>}
                </div>
                <div className={"lname"}>
                    <label className='label'>LAST NAME :</label>
                    <input 
                    className='input'
                    type="text" 
                    name='lastname' 
                    value={values.lname} 
                    onChange={handleChange}
                    />
                    {errors.fname && <p className='error'>{errors.fname}</p>}
                </div>
                <div className={"email"}>
                    <label className='label'>EMAIL :</label>
                    <input className='input'
                     type="text"
                     name='email'
                     value={values.email} 
                     onChange={handleChange}
                     />
                     {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className={"mobile"}>
                    <label className='label'>MOBILE NO:</label>
                    <input className='input' 
                    type="text" name='mobileno' 
                    value={values.mobile} 
                    onChange={handleChange}
                    />
                    {errors.mobile && <p className='error'>{errors.mobile}</p>}
                </div>
                <div className={"password"}>
                    <label className='label'>PASSWORD :</label>
                    <input className='input' 
                    type="password" 
                    name='pwd' 
                    value={values.password} 
                    onChange={handleChange}
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className={"conpassword"}>
                    <label className='label'>CONFIRM PASSWORD :</label>
                    <input className='input' 
                    type="password" 
                    name='conpwd' 
                    value={values.conpassword}
                    />
                    {errors.conpassword && <p className='error'>{errors.conpassword}</p>}
                </div>

                <FormControlLabel
                    control = {
                        <Checkbox 
                            name = "checkdB"
                            color = "primary"
                        />
                    }
                    label = "I agree to the Terms & Conditions"
                />

                <div>
                    <button className='submit' onClick={handleFormSubmit}>REGISTER</button>
                </div>
            </form>
        </div>
        {/* <footer /> */}
    </>
    )

};

export default Register;