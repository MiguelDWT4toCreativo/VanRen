import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Importar el contexto

class TestimonialOne extends Component {

	componentDidMount() {

		const $ = window.$;

		if ($('.js-tilt').length) {
			$('.js-tilt').tilt({
				maxTilt: 20,
				perspective: 700,
				glare: true,
				maxGlare: .3
			});
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

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<LanguageContext.Consumer>
				{({ translations }) => (
					<section className="testimonials-one">
						<div className="container">
							<div className="testimonials-one__top">
								<div className="block-title text-left">
									<p><span>{translations.testimonials}</span></p>
									<h3>{translations.testihead1}<br />{translations.testihead2}</h3>
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
											<img src={publicUrl + "assets/images/testimonials/testimonial-1-1.jpg"} alt={imagealt} />
										</div>{/* /.testimonials-one__image */}
										<div className="testimonials-one__content">
											<p>{translations.testdesc1}</p>
											<h3>{translations.testnom1}</h3>
											<span>{translations.testcargo1}</span>
											<i className="fa fa-quote-right testimonials-one__qoute-icon" />
										</div>{/* /.testimonials-one__content */}
									</div>{/* /.testimonials-one__single */}
								</div>{/* /.item */}
								<div className="item">
									<div className="testimonials-one__single">
										<div className="testimonials-one__image">
											<img src={publicUrl + "assets/images/testimonials/testimonial-1-2.jpg"} alt={imagealt} />
										</div>{/* /.testimonials-one__image */}
										<div className="testimonials-one__content">
											<p>{translations.testdesc2}</p>
											<h3>{translations.testnom2}</h3>
											<span>{translations.testcargo2}</span>
											<i className="fa fa-quote-right testimonials-one__qoute-icon" />
										</div>{/* /.testimonials-one__content */}
									</div>{/* /.testimonials-one__single */}
								</div>{/* /.item */}
								<div className="item">
									<div className="testimonials-one__single">
										<div className="testimonials-one__image">
											<img src={publicUrl + "assets/images/testimonials/testimonial-1-3.jpg"} alt={imagealt} />
										</div>{/* /.testimonials-one__image */}
										<div className="testimonials-one__content">
											<p>{translations.testdesc3}</p>
											<h3>{translations.testnom3}</h3>
											<span>{translations.testcargo3}</span>
											<i className="fa fa-quote-right testimonials-one__qoute-icon" />
										</div>{/* /.testimonials-one__content */}
									</div>{/* /.testimonials-one__single */}
								</div>{/* /.item */}
							</div>{/* /.testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme */}
						</div>{/* /.container */}
					</section>
				)}
			</LanguageContext.Consumer>
		);
	}
}

export default TestimonialOne;
