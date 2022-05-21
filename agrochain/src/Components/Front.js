import React from 'react'

import './loading.css';


export const Front = () => {
    return (
        <div class="container-fluid mt-3 mb-2">
            <div class="row">
                <div class="col-md-12">
            
                    <div class="container">
                        <div class="row pt-4 pb-3">
                            <div class="col-md-12 text-center">
                                <h1 class="super-bold display-4 home-head">INVESTOPIA</h1>
                                <p class="p-lg text-blue">Protecting Elders Against Financial Abuse</p>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4 pt-5 pb-4 bg-faint-blue">
                        <div class="col-md-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="video-load">
                                            <video id="home-video" autoplay loop>
                                                <source src="assets/ict_home.mp4" type="video/mp4" />
                                            </video>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mt-2">
                                            <div class="text-center text-sm-center text-md-left">
                                                <p class="p-lg">
                                                    As people continue to live longer,
                                                    the population of older folks facing cognitive issues will continue to rise,
                                                    and elder financial abuse will become increasingly more common.
                                                </p>

                                                <br />

                                                <a href="/tips">Read More <i class="fa fa-arrow-right fa-fw"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div class="container">
                        <div class="row pt-3 pb-4 text-center">
                            <div class="col-md-4">
                                <div class="mt-5">
                                    <h3 class="mt-4 mb-2 super-bold">Beautiful Interface</h3>
                                    <p>
                                        Visually helps you to determine green areas or dangerous risks.
                                    </p>

                                    <img class="img-fluid" src="assets/paper-dashboard.png" />
                                           
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mt-5">
                                        <h3 class="mt-4 mb-2 super-bold">Proper Management</h3>
                                        <p>
                                            Avoid useless investments and still enjoy your life with pleasure.
                                        </p>

                                        <img class="img-fluid" src="assets/metrics.png" />
                                                
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mt-5">
                                            <h3 class="mt-4 mb-2 super-bold">Defend Inflation</h3>
                                            <p>
                                                Inflation cannot be controlled but Expenses can be controlled.
                                            </p>

                                            <img class="img-fluid" src="assets/inflation.png" />
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    <div class="container">
                        <div class="row mt-3 text-center">
                            <div class="col-md-12">
                                <h4>
                                    In this Modern Era, then why you're behind ?
                                </h4>
                                <p class="p-large px-3">
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


