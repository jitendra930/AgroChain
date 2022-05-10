import React from 'react'
import PropTypes from 'prop-types'
/*import { Link } from "react-router-dom";*/

export default function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-effects sticky-top">
            <a className="navbar-brand super-bold">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars fa-fw"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <button className="nav-btn btn btn-secondary btn-sm btn-block"><i className="fa fa-sign-in-alt fa-fw"></i> Login</button>
                    </li>
                    <li className="nav-item nav-item-btn mb-2">
                        <button className="nav-btn btn btn-success btn-sm btn-block"><i className="fa fa-user-plus fa-fw"></i> Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
Navigation.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Navigation.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}