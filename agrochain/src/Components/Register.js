import { Form } from 'react-bootstrap'
import { useState, React, useContext, useEffect } from 'react'
import { usePlacesWidget } from "react-google-autocomplete";
import { Loader } from '@googlemaps/js-api-loader';
import { Footer } from "./Footer";

import wheat from './assets/wheat.jpg'
import { NftContext } from '../frontend/NftContext/NftProvider';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
    const { account, marketplace, setAccountType } = useContext(NftContext);
    const navigate = useNavigate();
    const [farmerId, setfarmerId] = useState('')
    const [name, setname] = useState('')
    const [govtid, setgovtid] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [contact, setcontact] = useState('')
    const [iotdeviceid, setiotdeviceid] = useState('')


    const mapOptions = {
        center: {
          lat: longitude,
          lng: longitude
        },
        zoom: 4   
      };
    
    useEffect(()=>{
        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            version: "weekly",
            libraries: ["places"]
            });

        loader.load().then(loadMap)
                    .catch(e => {
                        console.log(e,'error in loading map')
                    });
    },[])  
    
    const { ref: bootstrapRef } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        options: {
            types: [],
            componentRestrictions: { country: [] }
        },
        onPlaceSelected: (place) => {
            setLatitude(place.geometry.location.lat());
            setLongitude(place.geometry.location.lng());
            console.log(place);
        },
    });

    const RegisterFarmer = async () => {

        console.log(farmerId, name, govtid, latitude, longitude, contact, iotdeviceid);

        const lat_log = latitude.toString() + ' ' + longitude.toString();

        console.log(lat_log);

        await (await marketplace.create_Farmer(account, name, govtid, lat_log, contact, iotdeviceid)).wait();
        setAccountType(true);
        navigate('/profile');
    }

    const loadMap = (google) =>{
        let map = new google.maps.Map(document.getElementById("map"), mapOptions);
        let marker = new google.maps.Marker({
            position: {
                lat: latitude,
                lng: longitude
            },
            map,
            title: "Hello World!",
            draggable:true
          });
          marker.addListener(marker, 'dragend',(event)=>{
                setLatitude(event.latLng.lat())
                setLongitude(event.latLng.lng())
                map.setCenter(event.latLng.lat(),event.latLng.lng())
          })
    } 

    return (
        <>
            <div className="container mt-4 mb-4">
                <br />
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-5 d-sm-none d-none d-md-block">
                                    <div className="card-body sidebar-image-card-body">
                                        <img src={wheat} height="600" className="img-fluid sidebar-image" />
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-12">
                                    <div className="card-body form-contents">
                                        <h3 className="no-td-space">Register the Account</h3>
                                        <p className="type-7-2 text-muted">
                                            If You already have a account then <a href="https://metamask.io/" target="_blank">Connect Wallet.</a>
                                        </p>
                                        <div className="form-group">
                                            <h6>Public Crypto Id : <a href="https://www.youtube.com/watch?v=LmWbDDaU5fE" target="_blank">(Create a Crypto Account using MetaMask)</a></h6>
                                            <Form.Control onChange={(e) => setfarmerId(e.target.value)} type="text" className="form-control" value={account} required disabled />
                                        </div>
                                        <div className="form-group">
                                            <h6>User Name :</h6>
                                            <Form.Control onChange={(e) => setname(e.target.value)} type="text" className="form-control" placeholder="Enter User Name" required />
                                        </div>
                                        <div className="form-group">
                                            <h6> AADHAR NUMBER/ PAN CARD :</h6>
                                            <Form.Control onChange={(e) => setgovtid(e.target.value)} className="form-control" placeholder="ENTER AADHAR NUMBER/ PAN CARD" required />
                                        </div>
                                        <div className="form-group">
                                            <h6> Address :<span className="float-right"></span></h6>
                                            <Form.Control className="form-control" placeholder="Enter the Farm Address" ref={bootstrapRef} />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <h6> Address :<span className="float-right"></span></h6>
                                            <div id='map' className='googlemap' />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <h6>Contact :</h6>
                                            <Form.Control onChange={(e) => setcontact(e.target.value)} className="form-control" id="validationDefault03" placeholder="Enter Contact Details" required />
                                        </div>
                                        {/*<div className="form-group">*/}
                                        {/*    <h6>City :</h6>*/}
                                        {/*    <input type="text" className="form-control" id="validationDefault04" placeholder="Enter State" required />*/}
                                        {/*</div>*/}
                                        <div className="form-group">
                                            <h6>IOT DEVICE ID :</h6>
                                            <Form.Control onChange={(e) => setiotdeviceid(e.target.value)} type="text" className="form-control" id="validationDefault05" placeholder="Enter IOT DEVICE ID" required />
                                        </div>
                                        <br />
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="type-7">
                                                    By clicking on the 'Update Account' button below, you agree that you have
                                                    read, understand, and accepted our <a href="">TERMS OF SERVICE</a>.
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <button onClick={RegisterFarmer} className="btn btn-success">
                                                    <i className="fa fa-user-plus fa-fw"></i>
                                                    Create Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            < Footer />
        </>
    )
}