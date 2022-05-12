import React from 'react'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ethers } from "ethers"

import { NFT } from "./NFT";




export const NFTDetails = ({ marketplace }) => {
    const { state } = useLocation();
    const { nfts } = state;
    const buyMarketItem = async (nfts) => {
        await (await marketplace.purchaseItem(nfts.itemId, { value: nfts.totalPrice })).wait()
    }
    return (
        <div className="container mt-4">
            <br />
            <br />
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={nfts.image} />
                </div>
                <div className="col-md-6">
                    <h4 className="text-muted my-0 mt-4">{nfts.seller}</h4>
                    <h2 className="mt-0">{nfts.name}</h2>
                    <br />
                    <p className="text-muted">
                        {nfts.description}
                    </p>
                    <br />
                    <h4 className="text-success mb-0">Current Price:</h4>
                    <h2 className="text-success my-0">
                        <i className="fab fa-ethereum"></i> {ethers.utils.formatEther(nfts.totalPrice)}
                    </h2>
                    <h4 className="text-danger mt-1">
                        Last <i className="fab fa-ethereum"></i> {ethers.utils.formatEther(nfts.totalPrice)}
                    </h4>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-grid gap-2">
                                <button onClick={() => buyMarketItem(nfts)} className="btn btn-lg btn-primary">
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