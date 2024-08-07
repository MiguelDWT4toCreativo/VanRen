import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleTwo extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="about-two  go-top">
			<img src={publicUrl + "assets/images/shapes/about-two-bg.png"} alt={imagealt} className="about-two__bg" />
			<div className="container">
				<img src={publicUrl + "assets/images/resources/p3.jpg"} alt={imagealt} className="about-two__moc" />
				<div className="row">
					<div className="col-lg-6">
						<div className="about-two__content">
							<div className="block-title text-left">
								<p><span>Qué Hacemos</span></p>
								<h3>Ofrecemos la mejor solución <br /> para su negocio.</h3>
								<div className="block-title__line" />{/* /.block-title__line */}
							</div>{/* /.block-title */}
							<p>En VanRen, nos especializamos en ofrecer soluciones personalizadas que potencian el rendimiento comercial de pequeñas y medianas empresas.
								Combinamos estrategias de cierre de ventas con inteligencia emocional para ayudar a nuestros clientes a alcanzar sus objetivos y construir
								relaciones duraderas con sus propios clientes. Nuestro enfoque integral nos permite abordar las necesidades específicas de cada negocio y
								proporcionar herramientas y técnicas efectivas para el éxito.</p>
							<div className="about-two__box">
								<div className="about-two__box-icon">
									<i className="far fa-leaf" />
								</div>{/* /.about-two__box-icon */}
								<div className="about-two__box-content">
									<h3>Gestiona tu proyecto</h3>
									<p>Nos dedicamos a acompañar a nuestros clientes en cada etapa de su proyecto, desde la planificación hasta la ejecución.
										Proporcionamos asesoría y estrategias que garantizan un crecimiento sostenible y efectivo, utilizando un enfoque que integra
										técnicas de ventas probadas y habilidades de inteligencia emocional para maximizar los resultados.</p>
								</div>{/* /.about-two__box-content */}
							</div>{/* /.about-two__box */}
							<div className="about-two__box">
								<div className="about-two__box-icon">
									<i className="far fa-laptop-code" />
								</div>{/* /.about-two__box-icon */}
								<div className="about-two__box-content">
									<h3>Análisis de datos &amp; negocios</h3>
									<p>Realizamos un análisis detallado de los procesos y datos de tu negocio para identificar oportunidades de mejora y desarrollar estrategias 
										que optimicen la eficiencia y efectividad de tus operaciones comerciales. Con VanRen, obtendrás una visión clara y precisa que te permitirá 
										tomar decisiones informadas y estratégicas para el crecimiento de tu empresa.</p>
								</div>{/* /.about-two__box-content */}
							</div>{/* /.about-two__box */}
						</div>{/* /.about-two__content */}
					</div>{/* /.col-lg-6 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>


	}
}

export default AboutStyleTwo