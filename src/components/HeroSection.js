import React from 'react';
import '../App.css';
import {Button} from './button/Button';

import '../components/HeoSection.css';

function HeroSection() {
    return (
        <div className="container-fluid hero-main">
            <div className="row">
                <div className="col col-sm">
                    <div className="left-side-c"></div>
                </div>
                <div className="col col-sm">
                    <div className="row"><div className="row-space"></div></div>
                    <div className="row"><div className="col text-start text-uppercase fs-1 fw-bolder text-black">CLICK</div></div>
                    <div className="row"><div className="col text-center text-uppercase fs-1 fw-bolder text-white">&</div></div>
                    <div className="row"><div className="col text-end text-uppercase fs-1 fw-bolder text-black">EARN</div></div>
                    <div className="row  my-5"><div className="col text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci hendrerit laoreet mattis in. Sit sit congue nunc, in convallis sit. Non cursus nullam tempor viverra amet. Est, sit arcu, placerat aliquet senectus aenean condimentum. Risus risus ultrices vulputate donec rhoncus massa felis aliquet ullamcorper. Varius dictumst sed sem vel praesent.</div></div>
                    <div className="row my-5">
                        <div className="col-sm"><button className="btn btn-outline-secondary mb-3" type="submit">REGISTER</button></div>
                        <div className="col-sm"><button className="btn btn-outline-secondary mb-3" type="submit">SIGN-IN</button></div>
                    </div>
                </div>
            </div>
        </div>

        // <div className='hero-container'>
        //     <div className='row'>
        //         <div className='hero-img'>
        //             <img src='/public/img/bg-01.jpg'/>
        //         </div>
        //
        //     </div>
        //
        //     <h1>CLICK</h1>
        //     <h2>&</h2>
        //     <h3>EARN</h3>
        //     <p>
        //         Lorem ipsum dolor sit amet, consectetur
        //         adipiscing elit. Orci hendrerit laoreet mattis in. Sit
        //         sit congue nunc, in convallis sit. Non cursus nullam
        //         tempor viverra amet. Est, sit arcu, placerat aliquet
        //         senectus aenean condimentum. Risus risus
        //         ultrices vulputate donec rhoncus massa felis
        //         aliquet ullamcorper. Varius dictumst sed sem vel
        //         praesent.
        //     </p>
        //
        //     <div className='btn-hero'>
        //         <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>REGISTER</Button>
        //         <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>SIGN-IN</Button>
        //     </div>
        //
        // </div>
    )
}

export default HeroSection;
