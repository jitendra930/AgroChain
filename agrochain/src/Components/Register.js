import { Form } from 'react-bootstrap'
import { useState, React, useContext } from 'react'
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { Footer } from "./Footer";

import wheat from './assets/wheat.jpg'
import { NftContext } from '../frontend/NftContext/NftProvider';


export const Register = () => {
    const { account, marketplace } = useContext(NftContext);
    const [farmerId, setfarmerId] = useState('')
    const [name, setname] = useState('')
    const [govtid, setgovtid] = useState('')
    const [latitude, setLatitude] = useState('')
    const [contact, setcontact] = useState('')
    const [pin, setpin] = useState('')

    const { ref: bootstrapRef } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        options: {
            types: [],
            componentRestrictions: { country: [] }
        },
        onPlaceSelected: (place) => setLatitude(place.geometry.location.lat()),
    });

    const RegisterFarmer = async () => {

        console.log(farmerId, name, govtid, latitude, contact, pin);

        await (await marketplace.create_Farmer(account, name, govtid, latitude, contact, pin)).wait();
        /*<Route path="/" element={<Loading />} />*/
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
                                            If You already have a account then <a>Login.</a>
                                        </p>
                                        <div className="form-group">
                                            <h6>Public Crypto Id :</h6>
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
                                            <Form.Control className="form-control" placeholder="Enter Latitude/ Longitude" ref={bootstrapRef} />
                                        </div>
                                        <br />
                                        <br />
                                        <div className="form-group">
                                            <h6>Contact :</h6>
                                            <Form.Control onChange={(e) => setcontact(e.target.value)} className="form-control" id="validationDefault03" placeholder="Enter City" required />
                                        </div>
                                        {/*<div className="form-group">*/}
                                        {/*    <h6>City :</h6>*/}
                                        {/*    <input type="text" className="form-control" id="validationDefault04" placeholder="Enter State" required />*/}
                                        {/*</div>*/}
                                        <div className="form-group">
                                            <h6>PIN :</h6>
                                            <Form.Control onChange={(e) => setpin(e.target.value)} type="text" className="form-control" id="validationDefault05" placeholder="Enter Zip" required />
                                        </div>




                                        <hr />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="type-7">
                                                    By clicking on the 'Update Account' button below, you agree that you have
                                                    read, understand, and accepted our <a href="">TERMS OF SERVICE</a>.
                                                </p>
                                            </div>
                                        </div>

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