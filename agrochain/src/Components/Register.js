import React from 'react'

import wheat from './wheat.jpg'


export const Register = () => {
    return (
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
                                        <input type="text" className="form-control" value= "USER NAME" required disabled />
                                    </div>
                                    <div className="form-group">
                                            <h6>User Name :</h6>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <h6> AADHAR NUMBER/ PAN CARD :</h6>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <h6> New Password:<span className="float-right"><i id="password-visibility" className="far fa-fw fa-eye-slash"></i></span></h6>
                                        <input type="password" className="form-control" required />
                                    </div>
                                    <br />
                                    <br />
                                    <div className="form-group">
                                        <h6>Contact :</h6>
                                        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required />
                                    </div>
                                    <div className="form-group">
                                        <h6>City :</h6>
                                        <input type="text" class="form-control" id="validationDefault04" placeholder="State" required />
                                    </div>
                                    <div className="form-group">
                                        <h6>Zip :</h6>
                                        <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required />
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
                                            <button type="submit" class="btn btn-success">
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

        
    )
}