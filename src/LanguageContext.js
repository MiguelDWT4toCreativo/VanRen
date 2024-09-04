import React, { createContext, useState } from 'react';

// Crear un contexto para el idioma
export const LanguageContext = createContext();

// Traducciones para la aplicación
const translations = {
  es: {
    home: 'Inicio',
    services: 'Servicios',
    blog: 'Blog',
    contact: 'Contacto',
    idioma: 'Lenguajes',
    //fin navbar

    //banner
    estrategias1: 'Estrategias con ',
    estrategias2: 'inteligencia emocional para elevar ',
    estrategias3: ' tu ',
    estrategias4: 'negocio',
    desc1: 'En VanRen, combinamos la experiencia en ventas con la inteligencia emocional para transformar los resultados de tu negocio.',
    discoverNow: 'Descúbrelo Ahora',
    //fin de seccion banner

    // why choose us
    porque: '¿Por qué elegir VanRen?',
    entre1: 'Entrenamiento con Inteligencia Emocional',
    ent1: 'Estrategia Empresarial y Entrenamiento con Inteligencia Emocional',
    text1: 'Nuestros programas de entrenamiento están diseñados para mejorar la gestión de equipos de trabajo. Con VanRen, su empresa desarrollará habilidades emocionales esenciales para establecer relaciones sólidas y a largo plazo.',
    entre2: 'Estrategias de Cierre de Ventas',
    ent2: 'Soluciones Personalizadas para el Cierre de Ventas',
    text2: 'Analizamos detalladamente los procesos de ventas existentes y desarrollamos estrategias personalizadas para mejorar la eficiencia y efectividad en el cierre de negocios. Desde técnicas de negociación hasta el manejo de objeciones, optimizamos cada paso del proceso de venta para maximizar las conversiones.',
    entre3: 'Consultoría en Estrategias Comerciales',
    ent3: 'Consultoría y Estrategias Comerciales Innovadoras',
    text3: 'Proporcionamos un enfoque integral que combina técnicas de ventas probadas con inteligencia emocional para transformar sus resultados comerciales. Nuestros servicios están diseñados para comprender y satisfacer las necesidades específicas de cada cliente, creando estrategias que impulsen el éxito a largo plazo.',
    // why choose us fin

    // about1
    about: 'Acerca de',
    abouthead1: 'Somos especialistas en ',
    abouthead2: 'soluciones empresariales',
    abouttext1: 'En VanRen, somos especialistas en potenciar el rendimiento comercial de pequeñas y medianas empresas. Nuestro enfoque integral nos permite comprender las necesidades específicas de cada cliente y ofrecer soluciones personalizadas que impulsan el éxito a largo plazo.',
    abouthead3: 'Siempre estamos contigo',
    abouttext2: 'Nos dedicamos a transformar la manera en que se realizan las ventas, combinando técnicas probadas con un profundo entendimiento de la inteligencia emocional. Nos comprometemos a acompañar a nuestros clientes en cada paso del camino, asegurando que alcancen sus objetivos comerciales con estrategias que fomenten relaciones auténticas y duraderas.',
    // about1 fin

    // about2
    about2: 'Qué Hacemos',
    about2head1: 'Ofrecemos la mejor solución ',
    about2head2: 'para su negocio.',
    about2text1: 'En VanRen, nos especializamos en ofrecer soluciones personalizadas que potencian el rendimiento comercial de pequeñas y medianas empresas. Combinamos estrategias de cierre de ventas con inteligencia emocional para ayudar a nuestros clientes a alcanzar sus objetivos y construir	relaciones duraderas con sus propios clientes. Nuestro enfoque integral nos permite abordar las necesidades específicas de cada negocio y	proporcionar herramientas y técnicas efectivas para el éxito.',
    about2head3: 'Gestiona tu proyecto',
    about2text2: 'Nos dedicamos a acompañar a nuestros clientes en cada etapa de su proyecto, desde la planificación hasta la ejecución. Proporcionamos asesoría y estrategias que garantizan un crecimiento sostenible y efectivo, utilizando un enfoque que integra técnicas de ventas probadas y habilidades de inteligencia emocional para maximizar los resultados.',
    // about2 fin

    // Team
    teamdesc: 'Soy Vanessa Martínez, CEO y consultora de negocios en VanRen. A través de mi experiencia estudiando a empresas dentro del mercado de Nueva York y México, observé que más del 90% de ellas fracasa por no tener un buen plan y falta de inteligencia emocional en sus organizaciones. Mi pasión, experiencia en ventas y negocios me llevó a formar lo que ahora es VanRen un aliado estratégico para la resolución de problemas en tu negocio y un guía de éxito para el logro de tus metas y objetivos.',
    // Team fin

    // Skills 
    skills: 'Nuestras habilidades',
    skillshead1: 'Conozca todo sobre las ',
    skillshead2: 'habilidades profesionales',
    skillsdesc1: 'En VanRen, contamos con un conjunto de habilidades especializadas que nos permiten ofrecer soluciones efectivas y personalizadas para potenciar el rendimiento comercial de nuestros clientes. Nuestra experiencia en inteligencia emocional y estrategias de ventas nos capacita para abordar los desafíos comerciales con precisión y eficacia.',
    skills1: 'Entrenamiento en Inteligencia Emocional',
    skills2: 'Estrategias de Cierre de Ventas',
    skills3: 'Consultoría en Estrategias Comerciales',
    skills4: 'Gestión de Relaciones con el Cliente (CRM)',
    // Skills fin

    // testimonial
    testimonials: 'Los clientes dicen',
    testihead1: 'Conozca todo sobre las ',
    testihead2: 'habilidades profesionales',
    testdesc1: 'VanRen ha transformado nuestra forma de abordar las ventas. Su entrenamiento en inteligencia emocional ha sido un cambio de juego para nuestro equipo. No solo hemos visto un aumento en nuestras tasas de cierre, sino que también hemos construido relaciones más fuertes y duraderas con nuestros clientes. Recomiendo altamente sus servicios a cualquier empresa que busque mejorar su rendimiento comercial.',
    testnom1: 'Laura M',
    testcargo1: 'Directora de Ventas & TechSoluciones',
    testdesc2: 'Gracias a VanRen, nuestro equipo de ventas ha desarrollado habilidades esenciales en inteligencia emocional y técnicas de cierre de ventas. Su enfoque personalizado y su capacidad para entender nuestras necesidades específicas nos ha permitido alcanzar objetivos comerciales que antes parecían inalcanzables. VanRen no solo optimiza nuestros procesos de ventas, sino que también mejora la moral y la cohesión del equipo.',
    testnom2: 'Carlos G',
    testcargo2: 'Gerente General & InnoBiz',
    testdesc3: 'La consultoría de VanRen ha sido fundamental para el crecimiento de nuestro negocio. Sus estrategias de cierre de ventas y su análisis detallado de nuestros procesos comerciales nos han permitido mejorar significativamente nuestra eficiencia y efectividad. Además, la capacitación en inteligencia emocional ha sido invaluable para nuestro equipo. Hemos visto una notable mejora en nuestras relaciones con los clientes y en nuestros resultados financieros.',
    testnom3: 'Ana P',
    testcargo3: 'CEO, EmprendeMas',
    // testimonial fin

    // footer
    footeremail: 'Correo',
    footerdireccion: 'Dirección',
    footerphone: 'Teléfono',
    // footer fin

    //service
    servicehead: 'Inicio',
    servicess: 'NUESTROS SERVICIOS',
    servicehead1: 'Ofrecemos un servicio ',
    servicehead2: 'exclusivo para ti',
    servicedesc: 'En VanRen, nos dedicamos a proporcionar soluciones personalizadas que impulsan el rendimiento comercial de pequeñas y medianas empresas. Combinamos estrategias de cierre de ventas con inteligencia emocional para ayudar a nuestros clientes a alcanzar sus objetivos y construir relaciones duraderas y efectivas.',
    servicelist1: 'Entrenamiento con Inteligencia Emocional',
    servicelist2: 'Estrategias de Cierre de Ventas',
    servicelist3: 'Consultoría en Estrategias Comerciales',
    servicelist4: 'Análisis de Datos y Negocios',
    servicedetails1: 'Entrenamiento con Inteligencia Emocional',
    servicedetailsdesc1: 'Nuestros programas de entrenamiento están diseñados para mejorar el liderazgo, la empatía, la resiliencia y la gestión del estrés dentro de su equipo. Con VanRen, su empresa desarrollará habilidades emocionales esenciales para establecer relaciones sólidas con los clientes y gestionar equipos de manera efectiva.',
    servicedetails2: 'Estrategias de Cierre de Ventas',
    servicedetailsdesc2: 'Desarrollamos estrategias personalizadas para mejorar la eficiencia y efectividad en el cierre de negocios. Analizamos detalladamente los procesos de ventas existentes y proporcionamos técnicas avanzadas de negociación y manejo de objeciones, asegurando que cada paso del proceso de venta esté optimizado para maximizar las conversiones.',
    servicedetails3: 'Consultoría en Estrategias Comerciales',
    servicedetailsdesc3: 'Proporcionamos un enfoque integral que combina técnicas de ventas probadas con inteligencia emocional para transformar sus resultados comerciales. Nuestro equipo trabaja con usted para comprender y satisfacer las necesidades específicas de su negocio, creando estrategias que impulsen el éxito a largo plazo.',
    servicedetails4: 'Análisis de Datos y Negocios',
    servicedetailsdesc4: 'Realizamos un análisis detallado de los procesos y datos de su negocio para identificar oportunidades de mejora y desarrollar estrategias que optimicen la eficiencia y efectividad de sus operaciones comerciales. Con VanRen, obtendrá una visión clara y precisa que le permitirá tomar decisiones informadas y estratégicas para el crecimiento de su empresa.',
    //service fin

    //faq
    faqporque: 'Por qué elegirnos',
    faqhead1: 'Expertos en Inteligencia Emocional',
    faqheaddesc1: 'Nuestra experiencia en inteligencia emocional nos permite capacitar a su equipo para gestionar emociones, tanto propias como de los clientes, lo que resulta en relaciones comerciales más auténticas y duraderas.',
    faqhead2: 'Crecimiento Sostenible',
    faqheaddesc2: 'Nos enfocamos en crear un crecimiento comercial sostenible a largo plazo, combinando técnicas de ventas probadas con un profundo entendimiento de la dinámica emocional del mercado.',
    faqhead3: 'Resultados Comprobados',
    faqheaddesc3: 'Nuestros clientes han visto mejoras significativas en su rendimiento comercial y en la calidad de sus relaciones con los clientes gracias a nuestros servicios de consultoría y entrenamiento.',
    //faq fin


  },

  en: {
    home: 'Home',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
    idioma: 'Languages',

    //banner
    estrategias1: 'Strategies with ',
    estrategias2: 'emotional intelligence to elevate ',
    estrategias3: ' your ',
    estrategias4: 'business',
    desc1: 'At VanRen, we combine sales expertise with emotional intelligence to transform your business results.',
    discoverNow: 'Discover Now',
    //fin de seccion banner

    // why choose us
    porque: 'Why Choose VanRen',
    entre1: 'Emotional Intelligence Coaching',
    ent1: 'Business Strategy and Emotional Intelligence Training',
    text1: 'Our training programs are designed to improve the management of work teams. With VanRen, your company will develop essential emotional skills to build strong, long-term relationships.',
    entre2: 'Sales Closing Strategies',
    ent2: 'Customized Solutions for Sales Closing',
    text2: 'We analyze existing sales processes in detail and develop customized strategies to improve the efficiency and effectiveness of closing business. From negotiation techniques to objection handling, we optimize every step of the sales process to maximize conversions.',
    entre3: 'Business Strategy Consulting',
    ent3: 'Innovative Business Strategies and Consulting',
    text3: 'We provide a holistic approach that combines proven sales techniques with emotional intelligence to transform your business results. Our services are designed to understand and meet the specific needs of each client, creating strategies that drive long-term success.',
    // why choose us fin

    // about1
    about: 'About us',
    abouthead1: 'We are specialists in ',
    abouthead2: 'enterprise solutions',
    abouttext1: "At VanRen, we specialize in boosting the business performance of small and medium-sized companies. Our comprehensive approach allows us to understand each client's specific needs and deliver customized solutions that drive long-term success.",
    abouthead3: 'We are always with you',
    abouttext2: 'We are dedicated to transforming the way sales is done, combining proven techniques with a deep understanding of emotional intelligence. We are committed to accompanying our clients every step of the way, ensuring they achieve their business goals with strategies that foster authentic, lasting relationships.',
    // about1 fin

    // about2
    about2: 'What We Do',
    about2head1: 'We offer the best solution ',
    about2head2: 'for your business.',
    about2text1: 'At VanRen, we specialize in delivering customized solutions that boost the business performance of small and mid-sized companies. We combine sales closing strategies with emotional intelligence to help our clients achieve their goals and build lasting relationships with their own customers. Our holistic approach allows us to address the specific needs of each business and provide effective tools and techniques for success.',
    about2head3: 'Manage your project',
    about2text2: 'We are dedicated to accompanying our clients through every stage of their project, from planning to execution. We provide advice and strategies that ensure sustainable and effective growth, using an approach that integrates proven sales techniques and emotional intelligence skills to maximize results',
    // about2 fin

    // Team
    teamdesc: 'I am Vanessa Martinez, CEO and business consultant at VanRen. Through my experience studying companies in the New York and Mexico market, I observed that more than 90% of them fail because they do not have a good plan and lack of emotional intelligence in their organizations. My passion, experience in sales and business led me to form what is now VanRen, a strategic ally for the resolution of problems in your business and a success guide for the achievement of your goals and objectives.',
    // Team fin

    // Skills 
    skills: 'Our skills',
    skillshead1: 'Learn all about ',
    skillshead2: 'professional skills',
    skillsdesc1: "At VanRen, we have a specialized skill set that enables us to deliver effective, customized solutions to boost our clients' business performance.Our expertise in emotional intelligence and sales strategies equips us to address business challenges with precision and efficiency.",
    skills1: 'Emotional Intelligence Training',
    skills2: 'Sales Closing Strategies',
    skills3: 'Business Strategy Consulting',
    skills4: 'Customer Relationship Management (CRM)',
    // Skills fin

    // testimonial
    testimonials: 'Customers say',
    testihead1: 'Learn all about ',
    testihead2: 'professional skills',
    testdesc1: 'VanRen has transformed the way we approach sales. His emotional intelligence training has been a game changer for our team. Not only have we seen an increase in our close rates, but we have also built stronger and longer lasting relationships with our customers. I would highly recommend her services to any company looking to improve their business performance.',
    testnom1: 'Laura M',
    testcargo1: 'Director of Sales & TechSolutions',
    testdesc2: 'Thanks to VanRen, our sales team has developed essential skills in emotional intelligence and sales closing techniques. Their personalized approach and ability to understand our specific needs has enabled us to achieve business objectives that previously seemed unattainable. VanRen not only optimizes our sales processes, but also improves morale and team cohesion.',
    testnom2: 'Carlos G',
    testcargo2: 'General Manager & InnoBiz',
    testdesc3: "VanRen's consulting has been instrumental in the growth of our business. Their sales closing strategies and detailed analysis of our business processes have allowed us to significantly improve our efficiency and effectiveness. In addition, the emotional intelligence training has been invaluable to our team. We have seen a marked improvement in our customer relationships and in our financial results.",
    testnom3: 'Ana P',
    testcargo3: 'CEO, EmprendeMas',
    // testimonial fin

    // footer
    footeremail: 'Email',
    footerdireccion: 'Address',
    footerphone: 'Phone',
    // footer fin

    //service
    servicehead: 'Home',
    servicess: 'OUR SERVICES',
    servicehead1: 'We offer a service ',
    servicehead2: 'exclusively for you',
    servicedesc: 'At VanRen, we are dedicated to providing customized solutions that drive business performance for small and medium-sized companies. We combine sales closing strategies with emotional intelligence to help our clients achieve their goals and build long-lasting, effective relationships.',
    servicelist1: 'Emotional Intelligence Coaching',
    servicelist2: 'Sales Closing Strategies',
    servicelist3: 'Business Strategy Consulting',
    servicelist4: 'Data and Business Analytics',
    servicedetails1: 'Emotional Intelligence Training',
    servicedetailsdesc1: 'Our training programs are designed to improve leadership, empathy, resilience and stress management within your team. With VanRen, your company will develop essential emotional skills to build strong relationships with customers and manage teams effectively.',
    servicedetails2: 'Sales Closing Strategies',
    servicedetailsdesc2: 'We develop customized strategies to improve efficiency and effectiveness in closing deals. We analyze existing sales processes in detail and provide advanced negotiation and objection handling techniques, ensuring that each step of the sales process is optimized to maximize conversions.',
    servicedetails3: 'Business Strategy Consulting',
    servicedetailsdesc3: 'We provide a holistic approach that combines proven sales techniques with emotional intelligence to transform your business results. Our team works with you to understand and meet the specific needs of your business, creating strategies that drive long-term success.',
    servicedetails4: 'Data and Business Analytics',
    servicedetailsdesc4: 'We perform detailed analysis of your business processes and data to identify opportunities for improvement and develop strategies that optimize the efficiency and effectiveness of your business operations. With VanRen, you will gain clear and accurate insights that will enable you to make informed and strategic decisions to grow your business.',
    //service fin

    //faq
    faqporque: 'Why choose us',
    faqhead1: 'Emotional Intelligence Experts',
    faqheaddesc1: 'Our expertise in emotional intelligence enables us to empower your team to manage emotions, both their own and those of your customers, resulting in more authentic and lasting business relationships.',
    faqhead2: 'Sustainable Growth',
    faqheaddesc2: 'We focus on creating long-term, sustainable business growth by combining proven sales techniques with a deep understanding of the emotional dynamics of the marketplace.',
    faqhead3: 'Results Checked',
    faqheaddesc3: 'Our clients have seen significant improvements in their business performance and the quality of their customer relationships through our consulting and training services.',
    //faq fin

  },

};

// Proveedor de contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma por defecto

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
