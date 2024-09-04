import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Importar el contexto

class AboutStyleTwo extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<section className="about-two go-top">
						<img src={publicUrl + "assets/images/shapes/about-two-bg.png"} alt={imagealt} className="about-two__bg" />
						<div className="container">
							<img src={publicUrl + "assets/images/resources/p3.jpg"} alt={imagealt} className="about-two__moc" />
							<div className="row">
								<div className="col-lg-6">
									<div className="about-two__content">
										<div className="block-title text-left">
											<p><span>{translations.about2}</span></p>
											<h3>{translations.about2head1}<br />{translations.about2head2}</h3>
											<div className="block-title__line" />{/* /.block-title__line */}
										</div>{/* /.block-title */}
										<p>{translations.about2text1}</p>
										<div className="about-two__box">
											<div className="about-two__box-icon">
												<i className="far fa-leaf" />
											</div>{/* /.about-two__box-icon */}
											<div className="about-two__box-content">
												<h3>{translations.about2head3}</h3>
												<p>{translations.about2text2}</p>
											</div>{/* /.about-two__box-content */}
										</div>{/* /.about-two__box */}
									</div>{/* /.about-two__content */}
								</div>{/* /.col-lg-6 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</section>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default AboutStyleTwo;
