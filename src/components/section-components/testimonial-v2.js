import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''

    return  <section className={"testimonials-two "+CustomClass}>
			  <div className="container">
			    <div className="block-title-two text-center">
			      <h3>Lo que dicen nuestros <br /> sobre nosotros</h3>
			    </div>{/* /.block-title-two */}
			    <div className="testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;stagePadding&quot;: 0, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 0 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-1.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Laura M</h3>
			              <span>Directora de Ventas &amp; TechSoluciones</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>VanRen ha transformado nuestra forma de abordar las ventas. Su entrenamiento en inteligencia emocional 
							ha sido un cambio de juego para nuestro equipo. No solo hemos visto un aumento en nuestras tasas de cierre, 
							sino que también hemos construido relaciones más fuertes y duraderas con nuestros clientes. 
							Recomiendo altamente sus servicios a cualquier empresa que busque mejorar su rendimiento comercial.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-2.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Carlos G</h3>
			              <span>Gerente General &amp; InnoBiz</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>Gracias a VanRen, nuestro equipo de ventas ha desarrollado habilidades esenciales en inteligencia emocional y técnicas de cierre de ventas. 
							Su enfoque personalizado y su capacidad para entender nuestras necesidades específicas nos ha permitido alcanzar objetivos comerciales 
							que antes parecían inalcanzables. VanRen no solo optimiza nuestros procesos de ventas, sino que también mejora la moral y la cohesión del equipo.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-two__single">
			          <div className="testimonials-two__top">
			            <div className="testimonials-two__image">
			              <img src={publicUrl+"assets/images/testimonials/testimonial-2-3.jpg"} alt={ imagealt } />
			            </div>{/* /.testimonials-two__image */}
			            <div className="testimonials-two__top-content">
			              <h3>Ana P</h3>
			              <span>CEO, EmprendeMas</span>
			            </div>{/* /.testimonials-two__top-content */}
			          </div>{/* /.testimonials-two__top */}
			          <div className="testimonials-two__content">
			            <p>La consultoría de VanRen ha sido fundamental para el crecimiento de nuestro negocio. Sus estrategias de cierre de ventas 
							y su análisis detallado de nuestros procesos comerciales nos han permitido mejorar significativamente nuestra eficiencia y efectividad. 
							Además, la capacitación en inteligencia emocional ha sido invaluable para nuestro equipo. Hemos visto una notable mejora en nuestras 
							relaciones con los clientes y en nuestros resultados financieros.</p>
			          </div>{/* /.testimonials-two__content */}
			          <div className="testimonials-two__bottom">
			            <i className="far fa-quote-right testimonials-two__qoute-icon" />
			            <div className="testimonials-two__stars">
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			              <i className="far fa-star" />
			            </div>{/* /.testimonials-two__stars */}
			          </div>{/* /.testimonials-two__bottom */}
			        </div>{/* /.testimonials-two__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-two__carousel owl-carousel thm__owl-carousel owl-theme */}
			  </div>{/* /.container */}
			</section>

			 
        }
}

export default TestimonialV2