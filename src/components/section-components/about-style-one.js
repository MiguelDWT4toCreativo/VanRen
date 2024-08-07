import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleOne extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="about-one  go-top">
			<div className="container">
				<img src={publicUrl + "assets/images/resources/p2.jpg"} alt={imagealt} className="about-one__moc" />
				<div className="row justify-content-end">
					<div className="col-lg-6">
						<div className="about-one__content">
							<div className="block-title text-left">
								<p><span>Acerca de</span></p>
								<h3>Somos especialistas en <br /> soluciones empresariales</h3>
								<div className="block-title__line" />{/* /.block-title__line */}
							</div>{/* /.block-title */}
							<p>En VanRen, somos especialistas en potenciar el rendimiento comercial de pequeñas y medianas empresas a través de estrategias efectivas de cierre de ventas 
								y la aplicación de inteligencia emocional. Nuestro enfoque integral nos permite comprender las necesidades específicas de cada cliente y 
								ofrecer soluciones personalizadas que impulsan el éxito a largo plazo.</p>
							<h4>Siempre estamos contigo</h4>
							<p>En VanRen, nos dedicamos a transformar la manera en que se realizan las ventas, combinando técnicas probadas con un profundo entendimiento 
								de la inteligencia emocional. Nos comprometemos a acompañar a nuestros clientes en cada paso del camino, asegurando que alcancen sus objetivos 
								comerciales con estrategias que fomenten relaciones auténticas y duraderas.</p>
							{/* <Link to="/about" className="thm-btn about-one__btn">Leer Más <i className="fa fa-angle-double-right" /></Link> */}
							{/* /.thm-btn */}
						</div>{/* /.about-one__content */}
					</div>{/* /.col-lg-6 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>

	}
}

export default AboutStyleOne