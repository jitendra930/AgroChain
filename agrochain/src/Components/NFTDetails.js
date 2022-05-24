import React, { useContext } from 'react'

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

import axios from 'axios';

import { Line } from 'react-chartjs-2';
import { Loading } from "./Loading";
import { Footer } from "./Footer";
import { NftContext } from '../frontend/NftContext/NftProvider';


const api = axios.create({
    baseURL: `https://localhost:7081/api/Pollution/`
})


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options1 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Live CO2 IOT Data',
        },
    },
};

export const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Live Pollution Data',
        },
    },
};

const labels = [];

export const data = {
    labels,
    datasets: [
        {
            label: 'Loding Data',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};




export const NFTDetails = () => {
	const {marketplace, isLoading } = useContext(NftContext);
    const { state } = useLocation();
    const { nfts } = state;
    const [farmername, setfarmername] = useState('')
    const [govtid, setgovtid] = useState('')
    const [location, setlocation] = useState('')
    const [contact, setcontact] = useState('')
    const [pin, setpin] = useState('')
    const [loading, setLoading] = useState(true)
    const [IOT, setIOT] = useState(data)
    const [Pollution, setPollution] = useState(data)

    const LoadFarmer = async () => {

        const fam = await marketplace.farmers(nfts.seller)
        setfarmername(fam.name)
        setgovtid(fam.govtId)
        setlocation(fam.location)
        setcontact(fam.contact)
        LoadPollutionData()
        setTimeout(() => { LoadPollutionIOTData() }, 10000);
        setpin(fam.pin)
        setLoading(false)
}

    const LoadPollutionIOTData = () => {
    api.get('GetIotData?limit=100').then(({ data }) => {
        console.log(data)
        console.log(typeof data)
        const labelsx = data.map(val => val.localDateTime.split('T')[1])
        const datax = data.map(val => val.co2InPpm)
        console.log(labelsx)
        console.log(datax)
        const dataxx = {
            labels: labelsx,
            datasets: [
                {
                    label: 'Live CO2 IOT Data',
                    data: datax,
                    borderColor: 'rgb(255, 99, 132, 0.4)',
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                }
            ],
        }
        setIOT(dataxx)
        console.log(IOT)
    });

    
}



    

    const LoadPollutionData = () => {
        // the api needs to be updated with the dynamic latitude and longitude data
        api.get('GetPolltionHistory?lat=56.7&lon=45.6&currentDate=23%2F05%2F2022').then(({ data }) => {
            const labelsx = data.map(val => val.DateTime.split('T')[0])
            const dataxAQI = data.map(val => val.AverageAQI)
            const dataxCO = data.map(val => val.AverageCO)
            const dataxNO = data.map(val => val.AverageNO)
            const dataxNO2 = data.map(val => val.AverageNO2)
            const dataxO3 = data.map(val => val.AverageO3)
            const dataxSO2 = data.map(val => val.AverageSO2)
            const dataxPM25 = data.map(val => val.AveragePM25)
            const dataxPM10 = data.map(val => val.AveragePM10)
            const dataxNH3 = data.map(val => val.AverageNH3)
            const datapol = {
                labels: labelsx,
                datasets: [
                    {
                        label: 'AverageAQI',
                        data: dataxAQI,
                        borderColor: 'rgb(255, 99, 132, 0.4)',
                        backgroundColor: 'rgba(255, 99, 132, 1)',
                    },
                    {
                        label: 'AverageCO',
                        data: dataxCO,
                        borderColor: 'rgba(75, 192, 192, 0.4)',
                        backgroundColor: 'rgba(75, 192, 192, 1)',
                    },
                    {
                        label: 'AverageNO',
                        data: dataxNO,
                        borderColor: 'rgba(153, 102, 255, 0.4)',
                        backgroundColor: 'rgba(153, 102, 255, 1)',
                    },
                    {
                        label: 'AverageNO2',
                        data: dataxNO2,
                        borderColor: 'rgba(255, 159, 64, 0.4)',
                        backgroundColor: 'rgba(255, 159, 64, 1)',
                    },
                    {
                        label: 'AverageO3',
                        data: dataxO3,
                        borderColor: 'rgba(255, 99, 132, 0.4)',
                        backgroundColor: 'rgba(255, 99, 132, 1)',
                    },
                    {
                        label: 'AverageSO2',
                        data: dataxSO2,
                        borderColor: 'rgba(54, 162, 235, 0.4)',
                        backgroundColor: 'rgba(54, 162, 235, 1)',
                    },
                    {
                        label: 'AveragePM25',
                        data: dataxPM25,
                        borderColor: 'rgba(255, 206, 86, 0.4)',
                        backgroundColor: 'rgba(255, 206, 86, 1)',
                    },
                    {
                        label: 'AveragePM10',
                        data: dataxPM10,
                        borderColor: 'rgba(134, 220, 50, 0.4)',
                        backgroundColor: 'rgba(134, 220, 50, 1)',
                    },
                    {
                        label: 'AverageNH3',
                        data: dataxNH3,
                        borderColor: 'rgba(134, 156, 200, 0.4)',
                        backgroundColor: 'rgba(134, 156, 200, 1)',
                    },
                ],
            }
            setPollution(datapol)
            console.log(setPollution)
        });
    }

    

    

    const buyMarketItem = async (nfts) => {
        await (await marketplace.purchaseItem(nfts.itemId, { value: nfts.totalPrice })).wait()
    }
    useEffect(() => {
        if(isLoading) {
            LoadFarmer()
        }
    }, [isLoading])
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
                        <p className="mt-3 text-grey"> <i className="fa fa-copyright" aria-hidden="true"> {farmername} </i> <i className="fa fa-id-card" aria-hidden="true"></i> {govtid} <i className="fa fa-address-book"></i> {contact} <i className="fa fa-compass" aria-hidden="true"></i> {location} <i className="fa fa-map-marker"></i> {pin}</p>
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
                    <br />
                    <br />

                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <br />
                            <br />
                            <Line options={options1} data={IOT} />
                        </div>
                        <div className="col-md-6">
                            <br />
                            <br />
                        <Line options={options2} data={Pollution} />
                    </div>
                </div>
            </div>
            </div>
            <br />
            <br />
        <Footer />
      </>
    )
}