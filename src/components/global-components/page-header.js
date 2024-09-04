import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Importar el contexto

class Page_header extends Component {

	render() {

		let HeaderTitle = this.props.headertitle;
		let publicUrl = process.env.PUBLIC_URL + '/'
		let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
		let Img = this.props.Img ? this.props.Img : 'page-header-bg-1-1.jpg'

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<section className="page-header" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/' + Img + ')' }}>
						<div className="container">
							<h2>{HeaderTitle}</h2>
							<ul className="list-unstyled thm-breadcrumb">
								<li><a href="#">{translations.servicehead}</a></li>
								<li><span>{Subheader}</span></li>
							</ul>{/* /.list-unstyled thm-breadcrumb */}
						</div>{/* /.container */}
					</section>
				)}
			</LanguageContext.Consumer>
		)
	}
}

export default Page_header;
