import React from 'react'


export const Footer = () => {
    return (
        <footer className="mt-auto">
            <br />
            <br />
            <div className="container-fluid bg-blue text-white">
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Agro Chain</h3>
                                    <h6>Why only transfer? when you can request or borrow for a loan or buy NFTs or sell it out.</h6>
                                    <br />
                                    <h6>Made with <i className="fa fa-heart fa-fw"></i> in India.</h6>
                                </div>

                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>

            <div className="container">
                <div className="row mt-4 mb-3">
                    <div className="col-md-5 col-sm-5 col-5">
                        <p className="type-6">&copy; 2022 Agro Chain</p>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2 text-center"></div>
                    <div className="col-md-5 col-sm-5 col-5">
                        <ul className="inline-links text-right">
                            <li className="links">
                                <a className="link" href="?pg=privacy_policy">Privacy Policy</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=tc">Terms</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=faq">FAQ</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=about">About</a>
                            </li>
                            <li className="links">
                                <a className="link" href="?pg=contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}