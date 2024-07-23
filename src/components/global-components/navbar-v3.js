import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV3 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = 'logo'
		let anchor = '#'
		return (
			<div>
				<header className="site-header-two site-header-two__home-three go-top">
					<nav className="main-nav__two stricky">
						<div className="container">
							<div className="main-nav__logo-box">
								<Link to="/">
									<img src={publicUrl + "assets/images/logo-full-light.png"} alt={imgattr} />
								</Link>
							</div>{/* /.main-nav__logo-box */}
							<div className="main-nav__main-navigation">
							<ul className=" main-nav__navigation-box">
								<li>
									<Link to="/">Inicio</Link>
								</li>
								<li>
									<a href="/service">Servicios</a>
								</li>
								<li className="dropdown">
									<a href="#">Páginas</a>
									<ul>
										<li><Link to="/testimonial">Opniones</Link></li>
										<li><Link to="/team">Equipo VanRen</Link></li>
									</ul>{/* /.sub-menu */}
								</li>
								<li>
									<Link to="/blog-standard">Blog</Link>
								</li>
								<li>
									<Link to="/about">Acerca de</Link>
								</li>
								<li>
									<Link to="/contact">Contacto</Link>
								</li>
							</ul>
						</div>{/* /.main-nav__main-navigation */}
							<div className="main-nav__right">
								<a href="#" className="side-menu__toggler"><span /></a>
							</div>{/* /.main-nav__right */}
						</div>{/* /.container */}
					</nav>{/* /.main-nav__one */}
				</header>
			</div>

		)
	}
}


export default NavbarV3