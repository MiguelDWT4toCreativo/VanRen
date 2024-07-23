import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="service-two service-two__service-page service-two__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="service-two__image">
			          <img src={publicUrl+"assets/images/resources/about-page-moc-1.png"} alt={ imagealt } />
			        </div>{/* /.service-two__image */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-two__block">
			          <div className="block-title-two text-left">
			            <p>SOBRE NOSOTROS</p>
			            <h3>Consultoría Exclusiva <br /> para Brindar Soluciones</h3>
			          </div>{/* /.block-title-two */}
			          <p>En VanRen, nos dedicamos a potenciar el rendimiento comercial de pequeñas y medianas empresas a través de estrategias efectivas y 
						la aplicación de inteligencia emocional. Nuestro enfoque integral nos permite comprender las necesidades específicas de cada cliente y 
						ofrecer soluciones personalizadas que impulsen el éxito a largo plazo. Nos enorgullece transformar la manera en que se realizan las ventas, 
						combinando técnicas probadas con un profundo entendimiento de la inteligencia emocional.</p>
			          <ul className="list-unstyled video-one__list">
			            <li>
			              <i className="far fa-check" />
			              Entrenamiento en Inteligencia Emocional
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Estrategias de Cierre de Ventas
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Consultoría en Estrategias Comerciales
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Análisis de Datos y Negocios
			            </li>
			          </ul>{/* /.list-unstyled video-one__list */}
			          {/* <Link to="/service" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link> */}
			          {/* /.thm-btn */}
			        </div>{/* /.service-two__block */}
			      </div>{/* /.col-lg-5 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>



        }
}

export default AboutPage