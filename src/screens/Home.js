import React from 'react';
import '../../src/App.css';
import './Home.css';
import HeroSection from '../components/HeroSection';

function Home() {
    return (
        <>
            {/* <HeroSection /> */}
            <div>
                <HeroSection/>
                <section className="container-fluid">
                    <div className="row p-5">
                        <div className="col-sm">
                            <h2 className="text-center">About WAVE90's</h2>
                            <p className="text-center"> centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in</p>
                        </div>
                        <div className="col-sm">
                            <center>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVPpcwihb6fyB3xLMx3LFpJ4AF4fnmkR2Vw&usqp=CAU"
                                    alt=""/>
                            </center>
                        </div>
                    </div>
                </section>
                <section className="container-fluid benefit-cards">
                    <div className="row">
                        <div className="col-sm m-2">
                            <div className="card-ben text-center">
                                <h4>Member Benefits</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu suspendisse nulla arcu in faucibus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu suspendisse nulla arcu in faucibus.
                                    Lorem ipsum dolor sit amet, </p>
                                <button className="btn btn-outline-secondary mb-3" type="submit">Free Registration</button>
                            </div>
                        </div>
                        <div className="col-sm m-2">
                            <div className="card-ben text-center">
                                <h4>Advertiser Benefits</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu suspendisse nulla arcu in faucibus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu suspendisse nulla arcu in faucibus.
                                    Lorem ipsum dolor sit amet, </p>
                                <button className="btn btn-outline-secondary mb-3" type="submit">Promote Your Business</button>
                            </div>
                        </div>
                        <div className="col-sm m-2">
                            <div className="card-ben text-center">
                                <h4>Investment Plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu suspendisse nulla arcu in faucibus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu suspendisse nulla arcu in faucibus.
                                    Lorem ipsum dolor sit amet, </p>
                                <button className="btn btn-outline-secondary mb-3" type="submit">Get Your Plan</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid foo-sec">
                    <div className="row sec-part1 m-2">
                        <div className="col-sm-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum eget eget risus nisl. Sit egestas ultrices ac pellentesque nunc, egestas dui.</p>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-outline-secondary mb-3" type="submit">Get Your Plan</button>
                        </div>
                    </div>
                    <div className="row sec-part2 m-2"></div>
                    <div className="row sec-part3-1 m-2">

                    </div>
                    <div className="row sec-part3 m-2">
                        <div className="row">
                            <div className="sec-s"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <h1 className="display-3">How to earn money</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aenean orci tincidunt volutpat nec sem. Duis nunc felis diam eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aenean orci tincidunt volutpat nec sem. Duis nunc felis diam eget.</p>
                            </div>
                            <div className="col-sm">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KdiD-kRIyBw?controls=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <footer /> */}
        </>
    )
}

export default Home;

