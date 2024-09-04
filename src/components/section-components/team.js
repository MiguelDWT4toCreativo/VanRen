import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Importar el contexto

class Team extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<section className="team-one">
						<div className="container">
							<div className="block-title text-center">
								<h3>{translations.ceo}</h3>
								<div className="block-title__line" />{/* /.block-title__line */}
							</div>{/* /.block-title */}
							<div className="row">
								<div className="col-lg-3 col-md-6 cnt">
									<div className="team-one__single">
										<div className="team-one__image">
											<img src={publicUrl + "assets/images/team/team-1-1.jpg"} alt={imagealt} />
										</div>{/* /.team-one__image */}
										<div className="team-one__content">
											<div className="team-one__social">
												{/* Redes sociales opcionales */}
											</div>{/* /.team-one__social */}
											<h3>Vanessa Martínez</h3>
											<p>{translations.teamdesc}</p>
										</div>{/* /.team-one__content */}
									</div>{/* /.team-one__single */}
								</div>{/* /.col-lg-3 */}
							</div>{/* /.row */}
						</div>{/* /.container */}
					</section>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default Team;
