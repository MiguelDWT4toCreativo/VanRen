import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class FunfactV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="funfact-one funfact-one__home-two funfact-one__about-page">
			  <div className="container">
			    <div className="row high-gutter">
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-user-alt" />
			          </div>{/* /.funfact-one__icon */}
			          <h3><span className="counter">2500</span>{/* /.counter */}+</h3>
			          <p>Proyectos</p>
			        </div>{/* /.funfact-one__single */}
			      </div>{/* /.col-lg-3 col-md-6 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-heart" />
			          </div>{/* /.funfact-one__icon */}
			          <h3><span className="counter">2960</span>{/* /.counter */}+</h3>
			          <p>Clientes Satisfechos</p>
			        </div>{/* /.funfact-one__single */}
			      </div>{/* /.col-lg-3 col-md-6 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-cloud-download" />
			          </div>{/* /.funfact-one__icon */}
			          <h3><span className="counter">5620</span>{/* /.counter */}
			          </h3>
			          <p>Premios Ganados</p>
			        </div>{/* /.funfact-one__single */}
			      </div>{/* /.col-lg-3 col-md-6 */}
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-star" />
			          </div>{/* /.funfact-one__icon */}
			          <h3><span className="counter">365</span>{/* /.counter */}+</h3>
			          <p>Miembros del Equipo</p>
			        </div>{/* /.funfact-one__single */}
			      </div>{/* /.col-lg-3 col-md-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default FunfactV4