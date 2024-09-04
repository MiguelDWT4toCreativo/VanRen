import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../LanguageContext'; // Importamos el contexto

class WhyChooseUs extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
      <LanguageContext.Consumer>
        {({ translations }) => (
          <section className="service-one go-top">
            <div className="container">
              <div className="block-title text-center">
                <h3>{translations.porque}</h3>
                <div className="block-title__line" />{/* /.block-title__line */}
              </div>{/* /.block-title */}
              <div className="row high-gutter  go-top">
                <div className="col-lg-4">
                  <div className="service-one__single">
                    <div className="service-one__top">
                      <div className="service-one__icon">
                        <img src={publicUrl + "assets/images/shapes/service-i-1.png"} alt={imagealt} />
                      </div>{/* /.service-one__icon */}
                      <div className="service-one__top-content">
                        <h3>{translations.entre1}</h3><br />
                      </div>{/* /.service-one__top-content */}
                    </div>{/* /.service-one__top */}
                    <p><h4>{translations.ent1}</h4>{translations.text1}</p>
                  </div>{/* /.service-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="service-one__single">
                    <div className="service-one__top">
                      <div className="service-one__icon">
                        <img src={publicUrl + "assets/images/shapes/service-i-2.png"} alt={imagealt} />
                      </div>{/* /.service-one__icon */}
                      <div className="service-one__top-content">
                        <h3>{translations.entre2}</h3>
                        <br /><br />
                      </div>{/* /.service-one__top-content */}
                    </div>{/* /.service-one__top */}
                    <p><h4>{translations.ent2}</h4>{translations.text2}</p>
                  </div>{/* /.service-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="service-one__single">
                    <div className="service-one__top">
                      <div className="service-one__icon">
                        <img src={publicUrl + "assets/images/shapes/service-i-3.png"} alt={imagealt} />
                      </div>{/* /.service-one__icon */}
                      <div className="service-one__top-content">
                        <h3>{translations.entre3}</h3>
                        <br />
                      </div>{/* /.service-one__top-content */}
                    </div>{/* /.service-one__top */}
                    <p><h4>{translations.ent3}</h4>{translations.text3}</p>
                  </div>{/* /.service-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default WhyChooseUs;
