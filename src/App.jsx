import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Inicio from "./views/Inicio";
import AcercaDeMi from "./views/AcercaDeMi";
import Conocimientos from "./views/Conocimientos";
import Experiencia from "./views/Experiencia";
import Educacion from "./views/Educacion";
import Certificaciones from "./views/Certificaciones";
import Contacto from "./views/Contacto";
import AcercaDeMi from "./views/AcercaDeMi";


const importImages = (listaRutas) => {
  listaRutas.forEach(element => {
    return import(element)
    .then(module => {
      return module.default;
    })
    .then(image => {
      return image;
    })
    .catch(error => {
      console.error('Error al importar la imagen:', error);
    });
  });
};


/*let miImagen;

importImages(miImagen, './ruta/de/la/imagen.jpg').then(() => {
  console.log('Imagen importada:', miImagen);
});
*/

function App() {
  importImages(listaRutas);
  return (
    <>
      <header><NavBar/></header>
      <main>
        <Inicio />
        <AcercaDeMi/>
        <Conocimientos/>
        <Experiencia/>
        <Educacion/>
        <Certificaciones/>
        <Contacto/>
      </main>
      <footer><FooterComponent/></footer>
    </>
    
  );
}

export default App;


listaRutas = [
  algorithm = "./vendor/services/algorithm.svg",
  app_development = "./vendor/services/app-development.svg",
  blockchain = "./vendor/services/blockchain.svg",
  full_stack = "./vendor/services/full-stack.svg",
  server = "./vendor/services/server.svg",
  ui_ux = "./vendor/services/ui-ux.svg",
  web_programming_chico = "./vendor/services/web-programming-chico.svg",
  web_programming_grande = "./vendor/services/web-programming-grande.svg",
  binker = "./vendor/services/binker.png",
  hello = "./vendor/ilustrations/hello3.svg"
];

const cargarPropsInicio = () => {
  return {image: listaRutas.hello, textoPrimero: "HOLA!", titulo: "Soy Ezequiel Binker", textoSegundo: "Licenciado en Sistemas y Profesor de Programación", listaIconLink: [{link: "#", icon: "#"}, {link: "#", icon: "#"}, {link: "#", icon: "#"}], linkButton: "#", textoButton: "Contactame!=>"};
};

image
textoPrimero
titulo
textoSegundo
listaIconLink
linkButton
textoButton

const cargarPropsAcercaDeMi = () => {
  return {titulo: "Hola! Me llamo Ezequiel Binker.", texto1: "Soy Licenciado en Sistemas recibido en la Universidad de Palermo. Además, hace más de 9 años que trabajo en educación IT, transmitiendo los conceptos de programación a cientos de jóvenes de nivel secundario y terciario.", textoRowIzquierda1: "Edad:", textoRowDerecha1: "29 años", textoRowIzquierda2: "Email:", textoRowDerecha2: "ezebinker@gmail.com", texto2: "Mis conocimientos en educación me permiten comunicar mis pensamientos e intenciones de una manera clara y eficiente. Además, cuento con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.", image: listaRutas.binker};
};

titulo
texto1
textoRowIzquierda1
textoRowDerecha1
textoRowIzquierda2
textoRowDerecha2
texto2
image

const cargarPropsConocimientos = () => {
  return {};
};

const cargarPropsExperiencia = () => {
  return {};
};

const cargarPropsEducacion = () => {
  return {};
};

const cargarPropsCertificaciones = () => {
  return {};
};

const cargarPropsContacto = () => {
  return {};
}