import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../LanguageContext';  // Importar el contexto

class AboutStyleOne extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<section className="about-one go-top">
						<div className="container">
							<img src={publicUrl + "assets/images/resources/p2.jpg"} alt={imagealt} className="about-one__moc" />
							<div className="row justify-content-end">
								<div className="col-lg-6">
									<div className="about-one__content">
										<div className="block-title text-left">
											<p><span>{translations.about}</span></p>
											<h3>{translations.abouthead1}<br />{translations.abouthead2}</h3>
											<div className="block-title__line" />{/* /.block-title__line */}
										</div>{/* /.block-title */}
										<p>{translations.abouttext1}</p>
										<h4>{translations.abouthead3}</h4>
										<p>{translations.abouttext2}</p>
										{/* <Link to="/about" className="thm-btn about-one__btn">Leer Más <i className="fa fa-angle-double-right" /></Link> */}
									</div>{/* /.about-one__content */}
								</div>{/* /.col-lg-6 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</section>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default AboutStyleOne;
