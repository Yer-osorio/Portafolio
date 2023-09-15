import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Codigo from './Assets/codigo miyesy.png';
import Reggeaton from './Assets/index miyesy.png';
import Recomendaciones from './Assets/2 footer miyesy.png';
import LibreriaLogica from './Assets/Captura de pantalla 2023-09-15 083515.png'
import Form from './Assets/Captura de pantalla 2023-09-15 082903.png'
import Visual from './Assets/Captura de pantalla 2023-09-15 082818.png'

function Proyects() {
  return (
    <div className='proyectos'>
      <h1 className='titulos'>Mis Trabajos</h1>

      <div className='proyects'>
        <Carousel showThumbs={false} className='carrusel'>
          <div>
            <img src={Reggeaton} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)'  }}>Esta es la parte inicial del index de MIYESY</p>
          </div>
          <div>
            <img src={Recomendaciones} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)'  }}>Footer de la pagina web de MIYESY</p>
          </div>
          <div>
            <img src={Codigo} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)'  }}>Una sección del código, para visualizar la página completa ingresar a: <a href='https://miyesy.netlify.app/' target='blank' rel='noopener noreferrer'>MIYESY</a></p>
          </div>
        </Carousel>
      
        <div className='textoProyectos'>
          <h2 className='subtitulo'>Pagina Web con modelo responsivo</h2>
          <p> 
            MIYESY, una pagina enfocada en ofrecer servicios de programacion en los diferentes lenguajes existentes, fue el proyecto final de la competencia Diseño Web del segundo trimestres, fue en equipo conformado por tres compañeros, encargandome del diseño de dos de las 8 pestañas con las que cuenta, ademas cuenta con un modelo responsivo para que asi se pueda visualizar desde cualquier dispositivo y el login con validaciones en JavaScript
          </p>
        </div>
      </div>

      <div className='proyects'>

      <div className='textoProyectos'>
          <h2 className='subtitulo'>Aplicación de escritorio con C#</h2>
          <p> 
          Este proyecto final del segundo trimestre consistió en la creación de una aplicación que combina aspectos lógicos y visuales. Para la parte lógica, se utilizaron varias librerías, mientras que para la parte visual se desarrolló un formulario que incluía botones, campos de texto y etiquetas. Además, se implementó un archivo SQL en Microsoft SQL Server que contenía tablas relacionadas con instrumentos, tipos de instrumentos, marcas y cantidades. También se crearon procedimientos almacenados para llevar a cabo operaciones como la inserción, actualización y eliminación de datos. Para asegurar estas acciones, se diseñaron ventanas de confirmación.</p>
        </div>

        <Carousel showThumbs={false} className='carrusel'>
          <div>
            <img src={Visual} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>Esta es la parte visual de la aplicación</p>
          </div>
          <div>
            <img src={Form} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)'  }}>Parte del codigo del apartado visual</p>
          </div>
          <div>
            <img src={LibreriaLogica} alt="" />
            <p className="legend" style={{ color: 'rgba(0, 0, 0)', backgroundColor: 'rgba(255, 255, 255, 0.7)'  }}>Parte del codigo del apartado lógico</p>
          </div>
        </Carousel>
      
       
      </div>

    </div>
  );
}

export default Proyects;
