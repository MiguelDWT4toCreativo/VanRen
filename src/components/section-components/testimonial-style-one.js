import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialOne extends Component {

	    componentDidMount() {

	    const $ = window.$;
	    
	        if($('.js-tilt').length) {
		        $('.js-tilt').tilt({
		            maxTilt: 20,
		            perspective:700, 
		            glare: true,
		            maxGlare: .3
		        })
		    }

		    if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
	  }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="testimonials-one">
			  <div className="container">
			    <div className="testimonials-one__top">
			      <div className="block-title text-left">
			        <p><span>Los clientes dicen</span></p>
			        <h3>Conozca todo sobre las <br /> habilidades profesionales</h3>
			        <div className="block-title__line" />{/* /.block-title__line */}
			      </div>{/* /.block-title */}
			      <div className="testimonials-one__carousel-btn__wrap">
			        <a href="#" className="testimonials-one__carousel-btn-left"><i className="fa fa-angle-double-left" /></a>
			        <a href="#" className="testimonials-one__carousel-btn-right"><i className="fa fa-angle-double-right" /></a>
			      </div>{/* /.testimonials-one__carousel-btn__wrap */}
			    </div>{/* /.testimonials-one__top */}
			    <div className="testimonials-one__arrow-decor-wrap">
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			      <i className="fa fa-angle-right" />
			    </div>{/* /.testimonials-one__arrow-decor-wrap */}
			    <div className="testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme" data-carousel-prev-btn=".testimonials-one__carousel-btn-left" data-carousel-next-btn=".testimonials-one__carousel-btn-right" data-options="{&quot;loop&quot;: true, &quot;margin&quot;: 65, &quot;stagePadding&quot;: 50, &quot;items&quot;: 3, &quot;smartSpeed&quot;: 700, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;responsive&quot;: { &quot;0&quot;: { &quot;items&quot;: 1, &quot;stagePadding&quot;: 20 }, &quot;1199&quot;: { &quot;items&quot;: 2 }, &quot;1200&quot;: { &quot;items&quot;: 3 } }}">
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/testimonial-1-1.jpg"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>VanRen ha transformado nuestra forma de abordar las ventas. Su entrenamiento en inteligencia emocional 
							ha sido un cambio de juego para nuestro equipo. No solo hemos visto un aumento en nuestras tasas de cierre, 
							sino que también hemos construido relaciones más fuertes y duraderas con nuestros clientes. 
							Recomiendo altamente sus servicios a cualquier empresa que busque mejorar su rendimiento comercial.</p>
			            <h3>Laura M</h3>
			            <span>Directora de Ventas &amp; TechSoluciones</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/testimonial-1-2.jpg"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>Gracias a VanRen, nuestro equipo de ventas ha desarrollado habilidades esenciales en inteligencia emocional y técnicas de cierre de ventas. 
							Su enfoque personalizado y su capacidad para entender nuestras necesidades específicas nos ha permitido alcanzar objetivos comerciales 
							que antes parecían inalcanzables. VanRen no solo optimiza nuestros procesos de ventas, sino que también mejora la moral y la cohesión del equipo.</p>
			            <h3>Carlos G</h3>
			            <span>Gerente General &amp; InnoBiz</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			      <div className="item">
			        <div className="testimonials-one__single">
			          <div className="testimonials-one__image">
			            <img src={publicUrl+"assets/images/testimonials/testimonial-1-3.jpg"} alt={ imagealt } />
			          </div>{/* /.testimonials-one__image */}
			          <div className="testimonials-one__content">
			            <p>La consultoría de VanRen ha sido fundamental para el crecimiento de nuestro negocio. Sus estrategias de cierre de ventas 
							y su análisis detallado de nuestros procesos comerciales nos han permitido mejorar significativamente nuestra eficiencia y efectividad. 
							Además, la capacitación en inteligencia emocional ha sido invaluable para nuestro equipo. Hemos visto una notable mejora en nuestras 
							relaciones con los clientes y en nuestros resultados financieros.</p>
			            <h3>Ana P</h3>
			            <span>CEO, EmprendeMas</span>
			            <i className="fa fa-quote-right testimonials-one__qoute-icon" />
			          </div>{/* /.testimonials-one__content */}
			        </div>{/* /.testimonials-one__single */}
			      </div>{/* /.item */}
			    </div>{/* /.testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme */}
			  </div>{/* /.container */}
			</section>
			  

        }
}

export default TestimonialOne