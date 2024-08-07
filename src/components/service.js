import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v5';
// import Cta from './section-components/cta-v10';
import FaqV2 from './section-components/faq-v2';
import Testimonial from './section-components/testimonial-v2';
// import Brand from './section-components/brand-v4'; //imagenes chicas
// import Case from './section-components/case';
import Footer from './global-components/footer';

const ServiceV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle=""  />
        <Service />
        {/* <Cta /> */}
        <FaqV2 />
        <Testimonial />
        {/* <Brand /> */}
        {/* <Case  customclass="case-one case-one__team-page case-one__service-page"/> */}
        <Footer />
    </div>
}

export default ServiceV1

