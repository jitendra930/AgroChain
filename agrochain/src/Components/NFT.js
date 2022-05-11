import React from 'react'

import nft1 from './nft/nft1.png'
import nft2 from './nft/nft2.png'
import nft3 from './nft/nft3.png'


export const NFT = () => {
    return (
        <><><><><div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-9">
                    <h2 className="mb-0">NFTs</h2>
                    <p className="text-muted type-6 mt-0"> Your favourite NFTs are here</p>
                </div>
                <div className="col-md-3">
                    <div className="form-group row mt-2">
                        <div className="col-md-1">
                            <div className="mt-1">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        <div className="col-md-11"><input className="form-control" placeholder="Search Product..." /></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="mx-3 mt-3 mb-4">
                                    <div className="d-grid gap-2">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Mint NFT
                                        </button>
                                    </div>

                                    <br />

                                    <h6 className="text-muted">PRICE SORTING</h6>
                                    <div className="ml-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="low-to-high" value="option1" />
                                            <label className="form-check-label" htmlFor="low-to-high">Low to High</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="high-to-low" value="option2" />
                                            <label className="form-check-label" htmlFor="high-to-low">High to Low</label>
                                        </div>
                                    </div>
                                    <div className="form-group my-4">
                                        <h6 className="text-muted">PRICE RANGE</h6>
                                        <input type="range" className="form-control-range" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row no-gutters">
                                <div className="col-6 col-sm-4 col-md-4">
                                    <div className="card mx-1 mb-3">
                                        <img src={nft1} className="w-full" />
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p className="text-muted type-6 my-0">Chonga Army</p>
                                                    <h5 className="my-0">
                                                        <a>Space Agent</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <p className="text-success type-6 my-0">
                                                        <i className="fab fa-ethereum"></i> 26.46
                                                    </p>
                                                    <p className="text-danger type-7 my-0">
                                                        Last <i className="fab fa-ethereum"></i> 20.32
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="text-end float-end mt-1">
                                                        <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#nft1">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-md-4">
                                    <div className="card mx-1 mb-3">
                                        <img src={nft2} />
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p className="text-muted type-6 my-0">Chonga Army</p>
                                                    <h5 className="my-0">
                                                        <a href="#">Alien Agent</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <p className="text-success type-6 my-0">
                                                        <i className="fab fa-ethereum"></i> 54.82
                                                    </p>
                                                    <p className="text-primary type-7 my-0">
                                                        Offer <i className="fab fa-ethereum"></i> 47.36
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="text-end float-end mt-1">
                                                        <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#nft2">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-md-4">
                                    <div className="card mx-1 mb-3">
                                        <img src={nft3} />
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p className="text-muted type-6 my-0">Chonga Army</p>
                                                    <h5 className="my-0">
                                                        <a href="#">Colour Agent</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <p className="text-success type-6 my-0">
                                                        <i className="fab fa-ethereum"></i> 32.57
                                                    </p>
                                                    <p className="text-muted type-7 my-0">
                                                        <i className="far fa-clock"></i> 21 Hours
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="text-end float-end mt-1">
                                                        <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#nft3">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="mx-2 mt-2">
                                <div className="form-group">
                                    <h6>Name: <span className="text-danger">*</span></h6>
                                    <input className="form-control" placeholder="Enter Name" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <h6>Link to asset:<span className="text-danger">*</span></h6>
                                    <input className="form-control" placeholder="Enter Link" />
                                    <p className="text-muted type-7 mt-1 mb-0">Link your NFT to external link so that person can view.</p>
                                </div>
                                <br />
                                <div className="form-group">
                                    <h6>Description: <span className="text-danger">*</span></h6>
                                    <textarea className="form-control" placeholder="Enter Description..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Mint</button>
                        </div>
                    </div>
                </div>
            </div></><div className="modal fade" id="nft1" tabIndex="-1" aria-labelledby="nft1Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src={nft1} />
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-sm btn-primary" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-muted type-6 my-0">Chonga Army</p>
                                    <h4 className="mt-0">Space Agent</h4>
                                    <h6 className="text-success mb-0 mt-4">Current Price:</h6>
                                    <h4 className="text-success my-0"><i className="fab fa-ethereum"></i> 26.46</h4>
                                    <h6 className="text-danger mt-0">Last <i className="fab fa-ethereum"></i> 20.32</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></><div className="modal fade" id="nft2" tabIndex="-1" aria-labelledby="nft2Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src={nft2} />
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-sm btn-primary" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-muted type-6 my-0">Chonga Army</p>
                                    <h4 className="mt-0">Alien Agent</h4>
                                    <h6 className="text-success mb-0 mt-4">Current Price:</h6>
                                    <h4 className="text-success my-0"><i className="fab fa-ethereum"></i> 54.82</h4>
                                    <h6 className="text-primary mt-0">Offer <i className="fab fa-ethereum"></i> 47.36</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></><div className="modal fade" id="nft3" tabIndex="-1" aria-labelledby="nft3Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src={nft3} />
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-sm btn-primary" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-muted type-6 my-0">Chonga Army</p>
                                    <h4 className="mt-0">Colour Agent</h4>
                                    <h6 className="text-success mb-0 mt-4">Current Price:</h6>
                                    <h4 className="text-success my-0"><i className="fab fa-ethereum"></i> 32.57</h4>
                                    <h6 className="text-muted mt-0"><i className="far fa-clock"></i> 21 Hours</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>

    )
}