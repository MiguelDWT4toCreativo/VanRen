import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Importar el contexto

class FaqV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <LanguageContext.Consumer>
                {({ translations }) => (
                    <section className="faq-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-two__content">
                                        <div className="block-title-two text-left">
                                            <p>{translations.faqporque}</p>
                                        </div>{/* /.block-title-two */}
                                        <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                                            <div className="accrodion">
                                                <div className="accrodion-title">
                                                    <h4>{translations.faqhead1}</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>{translations.faqheaddesc1}</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title">
                                                    <h4>{translations.faqhead2}</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>{translations.faqheaddesc2}</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title">
                                                    <h4>{translations.faqhead3}</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>{translations.faqheaddesc3}</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* /.faq-two__content */}
                                </div>{/* /.col-lg-6 */}
                                <div className="col-lg-6 d-flex justify-content-center">
                                    <div className="faq-two__image">
                                        <img src={publicUrl + "assets/images/resources/faq-2-image.png"} alt={imagealt} />
                                    </div>{/* /.faq-two__image */}
                                </div>{/* /.col-lg-6 */}
                            </div>{/* /.row */}
                        </div>{/* /.container */}
                    </section>
                )}
            </LanguageContext.Consumer>
        );
    }
}

export default FaqV2;
