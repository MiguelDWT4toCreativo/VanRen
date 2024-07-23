import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = 'logo'
		let anchor = '#'
		return (
			<header className="site-header-one go-top">
				<nav className="main-nav__one stricky">
					<div className="container-fluid">
						<div className="main-nav__logo-box">
							<Link to="/">
								<img src={publicUrl + "assets/images/Logo_bco@8x.png"} alt={imgattr}  class="logo"/>
							</Link>
							<a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
						</div>{/* /.main-nav__logo-box */}
						<div className="main-nav__main-navigation">
							<ul className=" main-nav__navigation-box">
								<li>
									<Link to="/#">Inicio</Link>
								</li>
								<li>
									<Link to="/service">Servicios</Link>
								</li>
								<li>
									<Link to="/team">Equipo VanRen</Link>
								</li>								
								<li>
									<a href='https://consultoriavanren.com/blog/author/admin/'>Blog</a>
								</li>
								<li>
									<Link to="/about">Acerca de</Link>
								</li>
								<li>
									<Link to="/contact">Contacto</Link>
								</li>
							</ul>
						</div>{/* /.main-nav__main-navigation */}
					</div>
				</nav>
			</header>
		)
	}
}


export default Navbar