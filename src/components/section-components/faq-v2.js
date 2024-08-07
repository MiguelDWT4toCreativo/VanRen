import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="faq-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-two__content">
                <div className="block-title-two text-left">
                  <p>Por Qué Elegirnos</p>
                  <h3>Escogenos &amp; obten un <br /> servicio prefesinal</h3>
                </div>{/* /.block-title-two */}
                <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                  <div className="accrodion ">
                    <div className="accrodion-title">
                      <h4>Expertos en Inteligencia Emocional</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Nuestra experiencia en inteligencia emocional nos permite capacitar a su equipo para gestionar emociones, tanto propias como de los clientes, lo que resulta en relaciones comerciales más auténticas y duraderas.</p>
                      </div>{/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Estrategias Personalizadas</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Desarrollamos soluciones personalizadas para optimizar sus procesos de ventas y aumentar sus tasas de conversión. Analizamos detalladamente su situación específica para ofrecer estrategias que se adapten a sus necesidades.</p>
                      </div>{/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Crecimiento Sostenible</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Nos enfocamos en crear un crecimiento comercial sostenible a largo plazo, combinando técnicas de ventas probadas con un profundo entendimiento de la dinámica emocional del mercado.</p>
                      </div>{/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Resultados Comprobados</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>Nuestros clientes han visto mejoras significativas en su rendimiento comercial y en la calidad de sus relaciones con los clientes gracias a nuestros servicios de consultoría y entrenamiento.</p>
                      </div>{/* /.inner */}
                    </div>
                  </div>
                </div>
                {/* <a href="#" className="thm-btn faq-two__btn">Leer Más <i className="fa fa-angle-double-right" /></a>/.thm-btn faq-two__btn */}
              </div>{/* /.faq-two__content */}
            </div>{/* /.col-lg-6 */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="faq-two__image">
                <img src={publicUrl+"assets/images/resources/faq-2-image.png"} alt={ imagealt } />
              </div>{/* /.faq-two__image */}
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>

        }
}

export default FaqV2