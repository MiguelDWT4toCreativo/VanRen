import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Importar el contexto

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<div>
						<footer className="site-footer-one">
							<div className="site-footer-one__upper">
								<div className="container">
									{/* <img src={publicUrl + "assets/images/resources/footer-1-1.png"} alt={imgattr} className="site-footer-one__upper-moc" /> */}
									<div className="row">
										<div className="col-lg-3">
											<div className="footer-widget footer-widget__about">
												<a href="index.html">
													<img src={publicUrl + "assets/images/Logo_vde@8x.png"} alt={imgattr} />
												</a>
												<div className="footer-widget__contact-box">
													<div className="footer-widget__contact-top">
														<h3>{translations.ceo}</h3>
													</div>{/* /.footer-widget__contact-top */}
													<p>Vanessa Martínez </p>
												</div>{/* /.footer-widget__contact-box */}
												<div className="footer-widget__contact-box">
													<div className="footer-widget__contact-top">
														<i className="far fa-mail-bulk" />
														<h3>{translations.footeremail}</h3>
													</div>{/* /.footer-widget__contact-top */}
													<p>vanrenconsultancy@gmail.com</p>
												</div>{/* /.footer-widget__contact-box */}
												<div className="footer-widget__social">
													{/* <a href="https://www.facebook.com/webtend/"><i className="fab fa-facebook-f" /></a> */}
													<a href="https://www.instagram.com/vanrenbusiness/"><i className="fab fa-instagram" /></a>
													{/* <a href="https://google.com/webtend"><i className="fab fa-google-plus-g" /></a>
                                                    <a href="https://behance.com/webtend"><i className="fab fa-behance" /></a> */}
												</div>{/* /.footer-widget__social */}
											</div>{/* /.footer-widget */}
										</div>{/* /.col-lg-3 */}
										<div className="col-lg-4">
											<div className="footer-widget footer-widget__contact">
												<h3 className="footer-widget__title">{translations.footerdireccion}</h3>{/* /.footer-widget__title */}
												<div className="footer-widget__contact-box">
													<div className="footer-widget__contact-top">
														<i className="far fa-map-marked" />
														<h3>{translations.footerdireccion}</h3>
													</div>{/* /.footer-widget__contact-top */}
													<p>US - NYC📍Mexico 🇲🇽</p>
												</div>{/* /.footer-widget__contact-box */}
												<div className="footer-widget__contact-box">
													<div className="footer-widget__contact-top">
														<i className="far fa-phone" />
														<h3>{translations.footerphone}</h3>
													</div>{/* /.footer-widget__contact-top */}
													<p><a href="tel: 929 693 1556">USA 929 693 1556</a></p>
												</div>{/* /.footer-widget__contact-box */}
												<div className="footer-widget__contact-box">
													<div className="footer-widget__contact-top">
														<i className="far fa-phone" />
														<h3>{translations.footerphone}</h3>
													</div>{/* /.footer-widget__contact-top */}
													<p><a href="tel: 771 219 0217 ">México 771 219 0217 </a></p>
												</div>{/* /.footer-widget__contact-box */}
											</div>{/* /.footer-widget footer-widget__contact */}
										</div>{/* /.col-lg-4 */}
									</div>{/* /.row */}
								</div>{/* /.container */}
							</div>{/* /.site-footer-one__upper */}
							<div className="site-footer-one__bottom">
								<div className="container">
									<div className="site-footer-one__bottom-line" />{/* /.site-footer-one__bottom-line */}
									<p>Copy@2022 <a href="#">VanRen</a>. All Right Reserved. Design By Cuarto Creativo. </p>
								</div>{/* /.container */}
							</div>{/* /.site-footer-one__bottom */}
						</footer>
					</div>
				)}
			</LanguageContext.Consumer>
		)
	}
}

export default Footer_v1;
