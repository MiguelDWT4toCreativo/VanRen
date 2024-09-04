import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Importar el contexto

class ServiceV5 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<section className="service-two service-two__service-page go-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-5">
									<div className="service-two__block">
										<div className="block-title-two text-left">
											<p>{translations.servicess}</p>
											<h3>{translations.servicehead1}<br />{translations.servicehead2}</h3>
										</div>{/* /.block-title-two */}
										<p>{translations.servicedesc}</p>
										<ul className="list-unstyled video-one__list">
											<li>
												<i className="far fa-check" />
												{translations.servicelist1}
											</li>
											<li>
												<i className="far fa-check" />
												{translations.servicelist2}
											</li>
											<li>
												<i className="far fa-check" />
												{translations.servicelist3}
											</li>
											<li>
												<i className="far fa-check" />
												{translations.servicelist4}
											</li>
										</ul>{/* /.list-unstyled video-one__list */}
									</div>{/* /.service-two__block */}
								</div>{/* /.col-lg-5 */}
								<div className="col-lg-7">
									<div className="service-two__box-wrap">
										<div className="row">
											<div className="col-md-6">
												<div className="service-two__single js-tilt">
													<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/service-bg-1-1.jpg)' }} />
													{/* /.service-two__single-image */}
													<div className="service-two__single-inner">
														<i className="fal fa-hand-holding-usd" />
														<h3>{translations.servicedetails1}</h3>
														<p>{translations.servicedetailsdesc1}</p>
													</div>{/* /.service-two__single-inner */}
												</div>{/* /.service-two__single */}
											</div>{/* /.col-md-6 */}
											<div className="col-md-6">
												<div className="service-two__single js-tilt">
													<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/service-bg-1-1.jpg)' }} />
													{/* /.service-two__single-image */}
													<div className="service-two__single-inner">
														<i className="fal fa-umbrella-beach" />
														<h3>{translations.servicedetails2}</h3>
														<p>{translations.servicedetailsdesc2}</p>
													</div>{/* /.service-two__single-inner */}
												</div>{/* /.service-two__single */}
											</div>{/* /.col-md-6 */}
											<div className="col-md-6">
												<div className="service-two__single js-tilt">
													<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/service-bg-1-1.jpg)' }} />
													{/* /.service-two__single-image */}
													<div className="service-two__single-inner">
														<i className="fal fa-paper-plane" />
														<h3>{translations.servicedetails3}</h3>
														<p>{translations.servicedetailsdesc3}</p>
													</div>{/* /.service-two__single-inner */}
												</div>{/* /.service-two__single */}
											</div>{/* /.col-md-6 */}
											<div className="col-md-6">
												<div className="service-two__single js-tilt">
													<div className="service-two__single-image" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/service-bg-1-1.jpg)' }} />
													{/* /.service-two__single-image */}
													<div className="service-two__single-inner">
														<i className="fal fa-chart-network" />
														<h3>{translations.servicedetails4}</h3>
														<p>{translations.servicedetailsdesc4}</p>
													</div>{/* /.service-two__single-inner */}
												</div>{/* /.service-two__single */}
											</div>{/* /.col-md-6 */}
										</div>{/* /.row */}
									</div>{/* /.service-two__box-wrap */}
								</div>{/* /.col-lg-7 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</section>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default ServiceV5;
