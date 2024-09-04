import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../LanguageContext';

class Banner extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <LanguageContext.Consumer>
                {({ translations }) => (
                    <section className="banner-one go-top" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/banner-bg-1-1.png)' }}>
                        <img src={publicUrl + "assets/images/resources/p1.jpg"} alt={imagealt} className="banner-one__moc" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="banner-one__content">
                                        <h3>
                                            <span>{translations.estrategias1}</span><br />
                                            {translations.estrategias2}<br />
                                            {translations.estrategias3}
                                            <em>{translations.estrategias4}</em>
                                        </h3>
                                        <p>{translations.desc1}</p>
                                        <Link to="/service" className="thm-btn banner-one__btn">
                                            {translations.discoverNow} <i className="fa fa-angle-double-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </LanguageContext.Consumer>
        );
    }
}

export default Banner;
