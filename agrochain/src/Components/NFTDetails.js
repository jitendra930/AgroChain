import React from 'react'

import nft1 from './nft/nft1.png'


export const NFTDetails = () => {
    return (
        <div className="container mt-4">
            <br />
            <br />
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={nft1} />
                </div>
                <div className="col-md-6">
                    <h4 className="text-muted my-0 mt-4">Chonga Army</h4>
                    <h2 className="mt-0">Space Agent</h2>
                    <br />
                    <p className="text-muted">
                        Space Agent is a part of Space Exploration Squad who looks for inhabitant intruders.
                        One of the rarest collectibles in the market.
                    </p>
                    <br />
                    <h4 className="text-success mb-0">Current Price:</h4>
                    <h2 className="text-success my-0">
                        <i className="fab fa-ethereum"></i> 26.46
                    </h2>
                    <h4 className="text-danger mt-1">
                        Last <i className="fab fa-ethereum"></i> 20.32
                    </h4>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-grid gap-2">
                                <button className="btn btn-lg btn-primary">
                                    <i className="fas fa-wallet fa-fw"></i>
                                    Confirm Buy
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-grid gap-2">
                                <button className="btn btn-lg btn-secondary">
                                    <i className="fas fa-tag fa-fw"></i>
                                    Make an Offer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}