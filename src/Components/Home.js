import React from "react";
import Imagen from './Assets/F29F1064-8EA9-4828-9473-E6C0B64FF1FE.jpg';


const Home = () => {
  return (
   <div className="home">

    <div>
        <img alt='' className= 'imagenHome' src={Imagen}></img>
    </div>
       
    <div className="textoHome">
        <h1>
            Yerson Osorio Giraldo
        </h1>
     <p className="descripHome">Soy un desarrollador web, apasionado por la creación de aplicaciones web innovadoras, utilizando tecnologías modernas como React y Node.js.</p>
    </div>

   </div> 
  );
};

export default Home;