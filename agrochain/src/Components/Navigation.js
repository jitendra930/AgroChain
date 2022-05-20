import React from 'react'
import { Link, NavLink } from 'react-router-dom';
/*import { Link } from "react-router-dom";*/
import farmer from './farmer.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-effects sticky-top">
            <a className="navbar-brand super-bold"><img src={farmer} height="40" width="50" /> AGRO CHAIN </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars fa-fw"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {account && 
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "active-route" : ""}`} to={`/profile`}>Profile</NavLink>
                    </li>}
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "active-route" : ""}`} to={`/nft`}> NFT</NavLink>
                    </li>
                 {!account &&
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? "active-route" : ""}`} to={`/register`}>Register</NavLink>
                    </li>}
                    <li className="nav-item">
                        <button className="nav-btn btn btn-secondary btn-sm btn-block"><i className="fa fa-sign-in-alt fa-fw"></i> Login</button>
                    </li>
                    <li className="nav-item nav-item-btn mb-2">
                        {account ? (<button
                            className="nav-btn btn btn-danger btn-sm btn-block"><a href={`https://rinkeby.etherscan.io/address/${account}`} target="_blank"
                                rel="noopener noreferrer" > {account.slice(0, 5) + '...' + account.slice(38, 42)}</a></button>) : (
                            <button onClick={web3Handler} className="nav-btn btn btn-success btn-sm btn-block"><i className="fa fa-user-plus fa-fw"></i> Sign Up</button>)}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;