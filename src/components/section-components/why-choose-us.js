import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="service-one go-top">
      <div className="container">
        <div className="block-title text-center">
          <h3>¿Por qué elegir VanRen?</h3>
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
                  <h3>Entrenamiento en Inteligencia Emocional</h3>
                  <p>Tenga éxito con VanRen Consultoría</p>
                </div>{/* /.service-one__top-content */}
              </div>{/* /.service-one__top */}
              <p><h4>Estrategia Empresarial y Entrenamiento en Inteligencia Emocional</h4>
                Nuestros programas de entrenamiento están diseñados para mejorar el liderazgo, la empatía, la resiliencia y la gestión del estrés dentro de su equipo. Con VanRen, su empresa desarrollará habilidades emocionales esenciales para establecer relaciones sólidas y duraderas con los clientes.</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-2.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3>Estrategias de Cierre de Ventas</h3>
                  <p>Optimización de Ventas</p>
                  <br></br>
                  <br></br>
                </div>{/* /.service-one__top-content */}
              </div>{/* /.service-one__top */}
              <p><h4>Soluciones Personalizadas para el Cierre de Ventas</h4>
              Analizamos detalladamente los procesos de ventas existentes y desarrollamos estrategias personalizadas para mejorar la eficiencia y efectividad en el cierre de negocios. Desde técnicas de negociación hasta el manejo de objeciones, optimizamos cada paso del proceso de venta para maximizar las conversiones.</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
          <div className="col-lg-4">
            <div className="service-one__single">
              <div className="service-one__top">
                <div className="service-one__icon">
                  <img src={publicUrl + "assets/images/shapes/service-i-3.png"} alt={imagealt} />
                </div>{/* /.service-one__icon */}
                <div className="service-one__top-content">
                  <h3>Consultoría en Estrategias Comerciales</h3>
                  <p>Potencial Comercial</p>
                  <br></br>
                </div>{/* /.service-one__top-content */}
              </div>{/* /.service-one__top */}
              <p><h4>Consultoría y Estrategias Comerciales Innovadoras</h4>
                Proporcionamos un enfoque integral que combina técnicas de ventas probadas con inteligencia emocional para transformar sus resultados comerciales. Nuestros servicios están diseñados para comprender y satisfacer las necesidades específicas de cada cliente, creando estrategias que impulsen el éxito a largo plazo.</p>
            </div>{/* /.service-one__single */}
          </div>{/* /.col-lg-4 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>

  }
}

export default WhyChooseUs