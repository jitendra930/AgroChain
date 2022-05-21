import React from 'react'

import carbon from './carbon.mp4'

import './loading.css';


export const Front = () => {
    return (
        <div className="container-fluid mt-3 mb-2">
            <div className="row">
                <div className="col-md-12">
            
                    <div className="container">
                        <div className="row pt-4 pb-3">
                            <div className="col-md-12 text-center">
                                <h1 className="super-bold display-4 home-head">INVESTOPIA</h1>
                                <p className="p-lg text-blue">Protecting Elders Against Financial Abuse</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 pt-5 pb-4 bg-faint-blue">
                        <div className="col-md-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="video-load">
                                            <video id="home-video" autoplay loop>
                                                <source src={carbon} type="video/mp4" />
                                            </video>
                                            </div>
                                        </div>
                                    <div className="col-md-6 mt-2">
                                        <div className="text-center text-sm-center text-md-left">
                                            <p className="p-lg">
                                                    As people continue to live longer,
                                                    the population of older folks facing cognitive issues will continue to rise,
                                                    and elder financial abuse will become increasingly more common.
                                                </p>

                                                <br />

                                            <a href="/tips">Read More <i className="fa fa-arrow-right fa-fw"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="container">
                        <div className="row pt-3 pb-4 text-center">
                            <div className="col-md-4">
                                <div className="mt-5">
                                    <h3 className="mt-4 mb-2 super-bold">Beautiful Interface</h3>
                                    <p>
                                        Visually helps you to determine green areas or dangerous risks.
                                    </p>

                                    <img className="img-fluid" src="assets/paper-dashboard.png" />
                                           
                                    </div>
                                </div>
                            <div className="col-md-4">
                                <div className="mt-5">
                                    <h3 className="mt-4 mb-2 super-bold">Proper Management</h3>
                                        <p>
                                            Avoid useless investments and still enjoy your life with pleasure.
                                        </p>

                                    <img className="img-fluid" src="assets/metrics.png" />
                                                
                                        </div>
                                    </div>
                            <div className="col-md-4">
                                <div className="mt-5">
                                    <h3 className="mt-4 mb-2 super-bold">Defend Inflation</h3>
                                            <p>
                                                Inflation cannot be controlled but Expenses can be controlled.
                                            </p>

                                    <img className="img-fluid" src="assets/inflation.png" />
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    <div className="container">
                        <div className="row mt-3 text-center">
                            <div className="col-md-12">
                                <h4>
                                    In this Modern Era, then why you're behind ?
                                </h4>
                                <p className="p-large px-3">
                                    Do your proper financial planning with our advanced metrics
                                    made with current data models on financial savings and planning.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


