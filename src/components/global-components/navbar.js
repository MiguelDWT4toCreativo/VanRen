import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../LanguageContext';

const Navbar = () => {
	const { language, changeLanguage, translations } = useContext(LanguageContext);

	return (
		<header className="site-header-one go-top">
			<nav className="main-nav__one stricky">
				<div className="container-fluid">
					<div className="main-nav__logo-box">
						<Link to="/">
							<img src={process.env.PUBLIC_URL + "/assets/images/Logo_bco@8x.png"} alt="logo" className="logo" />
						</Link>
						<a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
					</div>
					<div className="main-nav__main-navigation">
						<ul className="main-nav__navigation-box">
							<li><Link to="/#">{translations.home}</Link></li>
							<li><Link to="/service">{translations.services}</Link></li>
							<li><a href="https://consultoriovanren.com/blog/author/admin/">{translations.blog}</a></li>
							<li className="dropdown">
								<a href="#">{translations.idioma}</a>
								<ul className="header-lang-list">
									<li><a href="#" onClick={() => changeLanguage('es')}>ES</a></li>
									<li><a href="#" onClick={() => changeLanguage('en')}>EN</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
