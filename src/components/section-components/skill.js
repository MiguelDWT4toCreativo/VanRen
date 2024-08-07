import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Skill extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="progress-one">
			  <img src={publicUrl+"assets/images/shapes/progress-bg-1.png"} alt={ imagealt } className="progress-one__bg" />
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/p4.png"} alt={ imagealt } className="progress-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="progress-one__content">
			          <div className="block-title text-left">
			            <p><span>Nuestras habilidades</span></p>
			            <h3>Conozca todo sobre las <br /> habilidades profesionales</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>En VanRen, contamos con un conjunto de habilidades especializadas que nos permiten ofrecer soluciones efectivas y personalizadas para 
						potenciar el rendimiento comercial de nuestros clientes. Nuestra experiencia en inteligencia emocional y estrategias de ventas nos 
						capacita para abordar los desafíos comerciales con precisión y eficacia.</p>
			          <div className="progress-one__progress-wrap">
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Entrenamiento en Inteligencia Emocional</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#3f02a8'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Estrategias de Cierre de Ventas</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#ff57a4'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Consultoría en Estrategias Comerciales</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#00c8b3'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Análisis de Datos y Negocios</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#ff9b0d'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
						<div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Gestión de Relaciones con el Cliente (CRM)</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '95%', backgroundColor: '#ff3f3f'}}>
			                  <b>95%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			          </div>{/* /.progress-one__progress-wrap */}
			        </div>{/* /.progress-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row justify-content-end */}
			  </div>{/* /.container */}
			</section>


        }
}

export default Skill