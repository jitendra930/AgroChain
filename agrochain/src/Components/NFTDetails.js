import React from 'react'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ethers } from "ethers"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Loading } from "./Loading";
import { Footer } from "./Footer";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['2017', '2018', '2019', '2020', '2021', '2022'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [200,180,70,10,70, 50],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [70,50,70,100,20, 30],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};











export const NFTDetails = ({ marketplace }) => {
    const { state } = useLocation();
    const { nfts } = state;
    const [farmername, setfarmername] = useState('')
    const [govtid, setgovtid] = useState('')
    const [location, setlocation] = useState('')
    const [contact, setcontact] = useState('')
    const [pin, setpin] = useState('')
    const [loading, setLoading] = useState(true)

    const LoadFarmer = async () => {

        const fam = await marketplace.farmers(nfts.seller)
        setfarmername(fam.name)
        setgovtid(fam.govtId)
        setlocation(fam.location)
        setcontact(fam.contact)
        setpin(fam.pin)
        setLoading(false)
    }

    const buyMarketItem = async (nfts) => {
        await (await marketplace.purchaseItem(nfts.itemId, { value: nfts.totalPrice })).wait()
    }
    useEffect(() => {
        LoadFarmer()
    }, [])
    if (loading) return (
        <Loading />
    )
    return (
        <>
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
                    <p className="mt-3 text-grey"> <i class="fa fa-copyright" aria-hidden="true"> {farmername} </i> <i className="fa fa-id-card" aria-hidden="true"></i> {govtid} <i className="fa fa-address-book"></i> {contact} <i className="fa fa-compass" aria-hidden="true"></i> {location} <i className="fa fa-map-marker"></i> {pin}</p>
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
                <div className="row">
                    <div className="col-md-6">
                        <Line options={options} data={data} />
                    </div>
                    <div className="col-md-6">
                        <Line options={options} data={data} />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </>
    )
}