import React from 'react'

import { useState, useEffect } from 'react'
import { ethers } from "ethers"


import './loading.css';


export const NFT = ({ marketplace, nft }) => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const loadMarketplaceItems = async () => {
        // Load all unsold items
        const itemCount = await marketplace.itemCount()
        let items = []
        for (let i = 1; i <= itemCount; i++) {
            const item = await marketplace.items(i)
            if (!item.sold) {
                // get uri url from nft contract
                const uri = await nft.tokenURI(item.tokenId)
                // use uri to fetch the nft metadata stored on ipfs 
                const response = await fetch(uri)
                const metadata = await response.json()
                // get total price of item (item price + fee)
                const totalPrice = await marketplace.getTotalPrice(item.itemId)
                // Add item to items array
                items.push({
                    totalPrice,
                    itemId: item.itemId,
                    seller: item.seller,
                    name: metadata.name,
                    description: metadata.description,
                    image: metadata.image
                })
            }
        }
        setLoading(false)
        setItems(items)
    }
    const buyMarketItem = async (item) => {
        await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
        loadMarketplaceItems()
    }

    useEffect(() => {
        loadMarketplaceItems()
    }, [])
    if (loading) return (
        <div className="container">
            <div className="loader-holder">
                <div className="holder"><div className="box"></div></div>
                <div className="holder"><div className="box"></div></div>
                <div className="holder"><div className="box"></div></div>
            </div>
        </div>
    )

    return (
        <><div className="container mt-4 mb-4">
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
                                    {items.map((item, idx) => (
                                        <div className="col-6 col-sm-4 col-md-4">
                                            <div className="card mx-1 mb-3">
                                                <img src={item.image} className="w-full" />
                                                <div className="card-body">

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p className="text-muted type-6 my-0">{item.name}</p>
                                                            <h5 className="my-0">
                                                                <a>{item.description}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-6">
                                                            <p className="text-success type-6 my-0">
                                                                <i className="fab fa-ethereum"></i> {ethers.utils.formatEther(item.totalPrice)} ETH
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="text-end float-end mt-1">
                                                                <button onClick={() => buyMarketItem(item)} type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#nft1">Buy Now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            </div></>
    )
}