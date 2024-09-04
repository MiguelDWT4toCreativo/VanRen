import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Importar el contexto

class Skill extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<section className="progress-one">
						<img src={publicUrl + "assets/images/shapes/progress-bg-1.png"} alt={imagealt} className="progress-one__bg" />
						<div className="container">
							<img src={publicUrl + "assets/images/resources/p4.png"} alt={imagealt} className="progress-one__moc" />
							<div className="row justify-content-end">
								<div className="col-lg-6">
									<div className="progress-one__content">
										<div className="block-title text-left">
											<p><span>{translations.skills}</span></p>
											<h3>{translations.skillshead1}<br />{translations.skillshead2}</h3>
											<div className="block-title__line" />{/* /.block-title__line */}
										</div>{/* /.block-title */}
										<p>{translations.skillsdesc1}</p>
										<div className="progress-one__progress-wrap">
											<div className="progress-one__progress__bar">
												<div className="progress-one__progress__bar-top">
													<h3>{translations.skills1}</h3>
												</div>{/* /.progress-one__progress__bar-top */}
												<div className="progress-one__progress__bar-line">
													<span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '95%', backgroundColor: '#3f02a8' }}>
														<b>95%</b></span>
												</div>{/* /.progress-one__progress__bar-line */}
											</div>{/* /.progress-one__progress__bar */}
											<div className="progress-one__progress__bar">
												<div className="progress-one__progress__bar-top">
													<h3>{translations.skills2}</h3>
												</div>{/* /.progress-one__progress__bar-top */}
												<div className="progress-one__progress__bar-line">
													<span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '95%', backgroundColor: '#ff57a4' }}>
														<b>95%</b></span>
												</div>{/* /.progress-one__progress__bar-line */}
											</div>{/* /.progress-one__progress__bar */}
											<div className="progress-one__progress__bar">
												<div className="progress-one__progress__bar-top">
													<h3>{translations.skills3}</h3>
												</div>{/* /.progress-one__progress__bar-top */}
												<div className="progress-one__progress__bar-line">
													<span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '95%', backgroundColor: '#00c8b3' }}>
														<b>95%</b></span>
												</div>{/* /.progress-one__progress__bar-line */}
											</div>{/* /.progress-one__progress__bar */}
											<div className="progress-one__progress__bar">
												<div className="progress-one__progress__bar-top">
													<h3>{translations.skills4}</h3>
												</div>{/* /.progress-one__progress__bar-top */}
												<div className="progress-one__progress__bar-line">
													<span className="wow fadeIn" data-wow-duration="1500ms" style={{ width: '95%', backgroundColor: '#ff3f3f' }}>
														<b>95%</b></span>
												</div>{/* /.progress-one__progress__bar-line */}
											</div>{/* /.progress-one__progress__bar */}
										</div>{/* /.progress-one__progress-wrap */}
									</div>{/* /.progress-one__content */}
								</div>{/* /.col-lg-6 */}
							</div>{/* /.row justify-content-end */}
						</div>{/* /.container */}
					</section>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default Skill;
