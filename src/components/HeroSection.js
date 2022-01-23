import React from 'react';
import '../App.css';
import  {Button}  from './button/Button';
// import '../components/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='/img/bg-01.jpg'/>
            <h1>CLICK</h1>
            <h2>&</h2>
            <h1>EARN</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Orci hendrerit laoreet mattis in. Sit 
sit congue nunc, in convallis sit. Non cursus nullam 
tempor viverra amet. Est, sit arcu, placerat aliquet 
senectus aenean condimentum. Risus risus 
ultrices vulputate donec rhoncus massa felis 
aliquet ullamcorper. Varius dictumst sed sem vel 
praesent.
            </p>

            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>REGISTER</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>SIGN-IN</Button>

        </div>
    )
}

export default HeroSection;
