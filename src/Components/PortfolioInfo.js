import React from 'react';
import InfoCard from './InfoCard'; // Asegúrate de importar el componente correctamente

const PortfolioInfo = () => {
  return (
    <div className="portfolio-info">
      <InfoCard
        title="Acerca de mí"
        content="Soy un desarrollador web apasionado por la creación de aplicaciones web innovadoras utilizando tecnologías modernas como React y Node.js."
      />
      <InfoCard
        title="Habilidades"
        content="Frontend: React, HTML, CSS, JavaScript
        Backend: Node.js, Express.js
        Bases de datos: MongoDB, PostgreSQL
        Otros: Git, Redux, Sass"
      />
      {/* Puedes agregar más InfoCards para mostrar información adicional */}
    </div>
  );
};

export default PortfolioInfo;
