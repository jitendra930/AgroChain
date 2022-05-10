import React from 'react'

import profile from './profile.png'
import nft1 from './nft/nft1.png'
import nft2 from './nft/nft2.png'


export const Profile = () => {
    return (
		<div className="container mt-4 mb-4">
			<div className="row">
				<div className="col-md-12">
					<h2 className="mb-0">Wallet</h2>
					<p className="text-muted type-6 mt-0"><i className="fa fa-circle fa-fw fa-sm text-success"></i> Ethereum Main Network</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">

					<div className="card border-2x mb-3" id="basic-details-2">
						<div className="card-body">
							<div className="row">
								<div className="col-md-4 text-center">
									<img src={profile} className="img-fluid" />
								</div>
								<div className="col-md-8 text-center">
									<h2 className="mt-3 text-dark-grey">$20</h2>
								</div>
							</div>

							<div className="row mt-2 text-center text-sm-left">
								<div className="col-md-12">
									<h3 className="mb-0">Chonga Bichi</h3>
									<p className="mt-0 text-dark-grey">0x536493hfknjsnfh3832733</p>

									<div className="row mt-4 text-center">
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-arrow-down fa-fw"></i>
											</button>
											<p className="small text-primary">Receive</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-arrow-up fa-fw"></i>
											</button>
											<p className="small text-primary">Send</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-credit-card fa-fw"></i>
											</button>
											<p className="small text-primary">Buy</p>
										</div>
										<div className="col-md-3 col-sm-3 col-3">
											<button className="btn btn-primary btn-sm">
												<i className="fa fa-exchange-alt fa-fw"></i>
											</button>
											<p className="small text-primary">Swap</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="d-grid gap-2">
						<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Mint NFT
						</button>
					</div>

				</div>

				<div className="col-md-8">

					<div className="card border-2x" id="basic-details-2">
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
										<li className="nav-item">
											<a className="nav-link" id="home-tab" data-toggle="tab" href="#tokens" role="tab" aria-controls="home" aria-selected="true">
												<strong>TOKENS</strong>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link active" id="profile-tab" data-toggle="tab" href="#nfts" role="tab" aria-controls="profile" aria-selected="false">
												<strong>NFTs</strong>
											</a>
										</li>
									</ul>

									<div className="tab-content mx-4" id="myTabContent">
										<div className="tab-pane fade" id="tokens" role="tabpanel" aria-labelledby="tokens-tab">
											<div className="row">
												<div className="col-3 col-sm-2 col-md-2">
													<img src={profile} className="img-fluid" />
												</div>
												<div className="col-9 col-sm-10 col-md-10 mt-md-2">
													<h4 className="mb-0 bold">0 ETH</h4>
													<p className="mt-0 no-td-space text-muted type-6">$0</p>
												</div>
											</div>

											<hr />

											<div className="row mt-4">
												<div className="col-3 col-sm-2 col-md-2">
													<img src={profile} className="img-fluid" />
												</div>
												<div className="col-9 col-sm-10 col-md-10 mt-md-2">
													<h4 className="mb-0 bold">0 ETH</h4>
													<p className="mt-0 no-td-space text-muted type-6">$0</p>
												</div>
											</div>

											<hr />
										</div>
										<div className="tab-pane fade show active" id="nfts" role="tabpanel" aria-labelledby="nfts-tab">
											{/*<div className="text-center text-dark-grey">*/}
											{/*	<i className="fa fa-circle-notch fa-3x fa-fw"></i>*/}
											{/*	<h3 className="mt-2 mb-0">No NFTs yet</h3>*/}
											{/*	<a href="#">Learn More</a>*/}
											{/*</div>*/}

											{/*<div className="row text-center text-muted mt-4">*/}
											{/*	<div className="col-md-12">*/}
											{/*		<p className="type-6 mb-0">Don't see your NFT?</p>*/}
											{/*		<a className="type-6 mt-0" href="#">+ ADD NFTs</a>*/}
											{/*	</div>*/}
											{/*</div>*/}
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
											</div>
											<div className="row">
												<div className="col-md-4">
													<div className="card">
														<div className="card-body">
															<div className="row">
																<div className="col-md-6">
																	<h5 className="mb-0">Legend</h5>
																	<p className="type-6 text-muted">Yearly Stickers</p>
																</div>
																<div className="col-md-6">
																	<p className="text-right text-success my-0"><i className="fa fa-lock-open fa-sm"></i></p>
																	<p className="text-right text-success type-7-2 my-0">3</p>
																</div>
															</div>
															<div className="row">
																<div className="col-md-12">
																	<img className="img-fluid" src={nft1} />
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-4">
													<div className="card">
														<div className="card-body">
															<div className="row">
																<div className="col-md-6">
																	<h5 className="mb-0">Team Player</h5>
																	<p className="type-6 text-muted">Monthly Stickers</p>
																</div>
																<div className="col-md-6">
																	<p className="text-right text-success my-0"><i className="fa fa-lock-open fa-sm"></i></p>
																	<p className="text-right text-success type-7-2 my-0">600</p>
																</div>
															</div>
															<div className="row">
																<div className="col-md-12">
																	<img className="img-fluid" src={nft2} />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
                
    )
}