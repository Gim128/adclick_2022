import React from 'react';
import '../App.css';
import {Button} from './button/Button';

import './HeoSection.css';

function HeroSection() {
    return (
        <div className="container-fluid hero-container">
            <div className="row">
                <div className="col col-sm">
                    <div className="left-side-c"></div>
                </div>
                <div className="col col-sm">
                    <div className="row"><div className="row-space"></div></div>
                    <div className="row"><div className="col text-start text-uppercase fs-1 fw-bolder text-black fo-2">CLICK</div></div>
                    <div className="row"><div className="col text-center text-uppercase fs-1 fw-bolder text-white fo-2">&</div></div>
                    <div className="row"><div className="col text-end text-uppercase fs-1 fw-bolder text-black fo-2">EARN</div></div>
                    <div className="row  my-5"><div className="col text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci hendrerit laoreet mattis in. Sit sit congue nunc, in convallis sit. Non cursus nullam tempor viverra amet. Est, sit arcu, placerat aliquet senectus aenean condimentum. Risus risus ultrices vulputate donec rhoncus massa felis aliquet ullamcorper. Varius dictumst sed sem vel praesent.</div></div>
                    <div className="row my-5">
                        <div className="col-sm"><button className="btn btn-primary mb-3" type="submit">REGISTER</button></div>
                        <div className="col-sm"><button className="btn btn-primary mb-3" type="submit">SIGN-IN</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
