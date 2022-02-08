import React from 'react';
import '../assets/css/investment.css';

function Investment() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='top-para'>
                    <h2><span>HOW TO INVEST...</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Commodo praesent elementum
                        sagittis, morbi aliquam egestas velit, integer cras.
                        Gravida tellus velit elit elit, id.
                    </p>
                </div>

                <div className='row'>
                    <img src='https://drive.google.com/file/d/1Hze9i4J_2btoWIpA562_AqRoQI0SX4or/view?usp=sharing'
                         alt=''/>
                </div>


            </div>

            <div className="row">
                <div className="card" style="width: 18rem;">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Lorem ipsum</h5>
                        <p className="card-text">$25.00</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Lorem ipsum dolor</li>
                        <li className="list-group-item">sit ament</li>
                        <li className="list-group-item">conscent</li>
                        <li className="list-group-item">adpisuhrb jrfhfkb</li>
                        <li className="list-group-item">porn dsfshhr jrbbs</li>
                        <li className="list-group-item">odio mei en</li>
                    </ul>
                    <div className="card-body">
                        <button type="button" className="btn btn-secondary">BUY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investment;
