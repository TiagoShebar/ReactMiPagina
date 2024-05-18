import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Inicio from "./views/Inicio";
import AcercaDeMi from "./views/AcercaDeMi";
import Conocimientos from "./views/Conocimientos";
import Experiencia from "./views/Experiencia";
import Educacion from "./views/Educacion";
import Certificaciones from "./views/Certificaciones";
import Contacto from "./views/Contacto";
import FooterComponent from "./components/FooterComponent";
import InfoAcercaDeMi from "./infoAcercaDeMi.txt";
import CardsExperiencia from "./cardsExperiencia.txt";
import CardsEducacion from "./cardsEducacion.txt";


const listaRutas = {
  algorithm: "./vendor/services/algorithm.svg",
  app_development: "./vendor/services/app-development.svg",
  blockchain: "./vendor/services/blockchain.svg",
  full_stack: "./vendor/services/full-stack.svg",
  server: "./vendor/services/server.svg",
  ui_ux: "./vendor/services/ui-ux.svg",
  web_programming_chico: "./vendor/services/web-programming-chico.svg",
  web_programming_grande: "./vendor/services/web-programming-grande.svg",
  binker: "./vendor/services/binker.png",
  hello: "./vendor/ilustrations/hello3.svg"
};

const importImages = () => {
  const promises = Object.keys(listaRutas).map(key => {
    const ruta = listaRutas[key];
    return import(ruta)
      .then(module => {
        return { [key]: module.default };
      })
      .catch(error => {
        console.error(`Error al importar la imagen ${key}:`, error);
        return { [key]: null }; // Maneja el error devolviendo null para la imagen que falló
      });
  });

  return Promise.all(promises)
    .then(results => {
      // Combina los resultados en un solo objeto
      return results.reduce((acc, curr) => {
        return { ...acc, ...curr };
      }, {});
    })
    .catch(error => {
      console.error('Error al importar las imágenes:', error);
    });
};


/*let miImagen;

importImages(miImagen, './ruta/de/la/imagen.jpg').then(() => {
  console.log('Imagen importada:', miImagen);
});
*/

function App() {
  const [images, setImages] = React.useState({});

  React.useEffect(() => {
    importImages().then(importedImages => {
      setImages(importedImages);
    });
  }, []);
  return (
    <>
      <header><NavBar props={cargarNavBar()}/></header>
      <main>
        <Inicio props={cargarPropsInicio()}/>
        <AcercaDeMi props={cargarPropsAcercaDeMi()}/>
        <Conocimientos props={cargarPropsConocimientos()}/>
        <Experiencia props={cargarPropsExperiencia()}/>
        <Educacion props={cargarPropsEducacion()}/>
        <Certificaciones props={cargarPropsCertificaciones()}/>
        <Contacto props={cargarPropsContacto()}/>
      </main>
      <footer><FooterComponent props={cargarFooterComponent()}/></footer>
    </>
    
  );
}

export default App;


const cargarNavBar = () => {
  return [
    { link: '#', texto: 'Ezequiel Binker' },
    { link: '#', texto: 'Acerca de Mí' },
    { link: '#', texto: 'Conocimientos' },
    { link: '#', texto: 'Experiencia' },
    { link: '#', texto: 'Educación' },
    { link: '#', texto: 'Certificaciones' },
    { link: '#', texto: 'Contacto' }
  ];
};

const listaIconLink = () => {
  return [{ link: "#", icon: "#" }, { link: "#", icon: "#" }, { link: "#", icon: "#" }];
};

const cargarPropsInicio = () => {
  const iconLinks = listaIconLink();
  return {
    image: listaRutas.hello,
    textoPrimero: "HOLA!",
    titulo: "Soy Ezequiel Binker",
    textoSegundo: "Licenciado en Sistemas y Profesor de Programación",
    listaIconLink: iconLinks,
    linkButton: "#",
    textoButton: "Contactame!=>"
  };
};

const cargarPropsAcercaDeMi = () => {
  console.log(InfoAcercaDeMi);
  const a = require('./infoAcercaDeMi.txt');
  console.log(a);
  return {
    titulo: "Hola! Me llamo Ezequiel Binker.",
    texto1: paragraphs[0],
    textoRowIzquierda1: "Edad:",
    textoRowDerecha1: "29 años",
    textoRowIzquierda2: "Email:",
    textoRowDerecha2: "ezebinker@gmail.com",
    texto2: paragraphs[1],
    image: listaRutas.binker
  };
  
};

const cargarPropsConocimientos = () => {
  return {
    title: "Conocimientos",
    listaImageText: [
      { image: listaRutas.web_programming_grande, name: "Desarrollo Web" },
      { image: listaRutas.app_development, name: "Desarrollo Móvil" },
      { image: listaRutas.blockchain, name: "Blockchain & Criptomonedas" },
      { image: listaRutas.ui_ux, name: "UX/UI" }
    ]
  };
};

const cargarPropsExperiencia = () => {
  var paragraphs;
  return {
    titulo: "Experiencia Laboral",
    listaCards: [
      {
        imageCard: listaRutas.server,
        titleCard: "Desarrollador Backend",
        dondeYCuandoCard: "Wadiah Capital. (2021-2023)",
        textoCard: paragraphs[0]
      },
      {
        imageCard: listaRutas.full_stack,
        titleCard: "Desarrollador Full Stack",
        dondeYCuandoCard: "Freelance. (2019-actual)",
        textoCard: paragraphs[1]
      },
      {
        imageCard: listaRutas.web_programming_chico,
        titleCard: "Profesor de Informática",
        dondeYCuandoCard: "Escuela ORT. (2016-actual)",
        textoCard: paragraphs[2]
      },
      {
        imageCard: listaRutas.algorithm,
        titleCard: "Profesor de Taller de Programación",
        dondeYCuandoCard: "Instituto ORT. (2020-2021)",
        textoCard: paragraphs[3]
      }
    ]
  };
};

const cargarPropsEducacion = () => {
  var paragraphs;
  return {
    title: "Educación",
    listaCards: [
      {
        titleCard: "Licenciado en Sistemas",
        dondeYCuandoCard: "Universidad de Palermo (2018-2020)",
        textoCard: paragraphs[0]
      },
      {
        titleCard: "Analista de Sistemas",
        dondeYCuandoCard: "Instituto Tecnológico ORT (2013-2017)",
        textoCard: paragraphs[1]
      },
      {
        titleCard: "Bachiller Técnico con orientación en Informática",
        dondeYCuandoCard: "Escuela ORT (2007-2012)",
        textoCard: paragraphs[2]
      }
    ]
  };
};

const cargarPropsCertificaciones = () => {
  return {};
};

const cargarPropsContacto = () => {
  return {
    title: "Contacto",
    h5title: "Sigamos en contacto!",
    texto1: "Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal",
    texto2: "¡Gracias por visitar mi sitio web!",
    textoRowIzquierda: "Email:",
    textoRowDerecha: "ezebinker@gmail.com"
  };
};

const cargarFooterComponent = () => {
  const iconLinks = listaIconLink();
  return {
    title: "Ezequiel Binker",
    texto: "Licenciado en Sistemas y Profesor de Programación",
    listaIconLink: iconLinks,
    textoDerechos: "©2024 Ezequiel Binker. Todos los derechos reservados"
  };
};