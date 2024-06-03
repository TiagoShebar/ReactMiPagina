import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Inicio from "./views/Inicio";
import AcercaDeMi from "./views/AcercaDeMi";
import Conocimientos from "./views/Conocimientos";
import Experiencia from "./views/Experiencia";
import Educacion from "./views/Educacion";
import Contacto from "./views/Contacto";
import FooterComponent from "./components/FooterComponent";
import algorithm from "./vendor/services/algorithm.svg";
import app_development from "./vendor/services/app-development.svg";
import blockchain from "./vendor/services/blockchain.svg";
import full_stack from "./vendor/services/full-stack.svg";
import server from "./vendor/services/server.svg";
import ui_ux from "./vendor/services/ui-ux.svg";
import web_programming_white from "./vendor/services/web-programming-white.svg";
import web_programming_black from "./vendor/services/web-programming-black.svg";
import noah from "./vendor/services/noah.jpg";
import hello from "./vendor/ilustrations/hello3.svg";
import "./App.css"

const listaRutas = {
  algorithm,
  app_development,
  blockchain,
  full_stack,
  server,
  ui_ux,
  web_programming_white,
  web_programming_black,
  noah,
  hello
};

function App() {
  return (
    <>
      <header style={{backgroundColor: "#F6DCAC"}}><NavBar navLinkPrincipal={navBar.navLinkPrincipal} listaNavlink={navBar.lista}/></header>
      <main>
        <section className="views" id="inicio"><Inicio image={i.image} textoPrimero={i.textoPrimero} titulo={i.titulo} textoSegundo={i.textoSegundo} linkButton={i.linkButton} textoButton={i.textoButton}/></section>
        <section className="views" id="acerca-de-mi"><AcercaDeMi titulo={a.titulo} texto1={a.texto1} textoRowIzquierda1={a.textoRowIzquierda1} textoRowDerecha1={a.textoRowDerecha1} textoRowIzquierda2={a.textoRowIzquierda2} textoRowDerecha2={a.textoRowDerecha2} texto2={a.texto2} image={a.image}/></section>
        <section className="views" id="conocimientos"><Conocimientos title={cono.title} listaImageText={cono.listaImageText}/></section>
        <section className="views" id="experiencia"><Experiencia titulo={ex.titulo} listaCards={ex.listaCards}/></section>
        <section className="views" id="educacion"><Educacion title={ed.title} listaCards={ed.listaCards}/></section>
        <section className="views" id="contacto"><Contacto title={cont.title} h5title={cont.h5title} texto1={cont.texto1} texto2={cont.texto2} textoRowIzquierda={cont.textoRowIzquierda} textoRowDerecha={cont.textoRowDerecha} textoButton={cont.textoButton}/></section>
      </main>
      <footer><FooterComponent title={footerComponent.title} texto={footerComponent.texto} textoDerechos={footerComponent.textoDerechos}/></footer>
    </>
    
  );
}



export default App;


const navBar = {
    lista: [
      { link: '#acerca-de-mi', texto: 'Acerca de Mí' },
      { link: '#conocimientos', texto: 'Conocimientos' },
      { link: '#experiencia', texto: 'Experiencia' },
      { link: '#educacion', texto: 'Educación' },
      { link: '#contacto', texto: 'Contacto' }
    ],
   navLinkPrincipal: { link: '#inicio', texto: 'Tiago Shebar' }
};


const i = {
    image: listaRutas.hello,
    textoPrimero: "HOLA!",
    titulo: "Soy Tiago Shebar",
    textoSegundo: "Estudiante de ORT Yatay",   
    linkButton: "#contacto",
    textoButton: "Contactame!=>"
};


const a = {
    titulo: "Hola! Me llamo Tiago Shebar.",
    texto1: "Soy estudiante de ORT en la especialización en informática en la sede de almagro",
    textoRowIzquierda1: "Edad:",
    textoRowDerecha1: calcularEdad('2006-12-21'),
    textoRowIzquierda2: "Email:",
    textoRowDerecha2: "47699554@est.ort.edu.ar",
    texto2: "Mis conocimientos en educación me permiten comunicar mis pensamientos e intenciones de una manera clara y eficiente. Además, cuento con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.",
    image: listaRutas.noah
};

const cono = {
    title: "Conocimientos",
    listaImageText: [
      { image: listaRutas.web_programming_white, name: "Desarrollo Web" },
      { image: listaRutas.app_development, name: "Desarrollo Móvil" },
      { image: listaRutas.blockchain, name: "Blockchain & Criptomonedas" },
      { image: listaRutas.ui_ux, name: "UX/UI" }
    ]
};

const ex = {
    titulo: "Experiencia Laboral",
    listaCards: [
      {
        imageCard: listaRutas.server,
        titleCard: "Desarrollador Backend",
        dondeYCuandoCard: "XYZ Solutions (2017-2019)",
        textoCard: `Durante mi tiempo en XYZ Solutions, mi enfoque estaba en la mejora continua del backend del sistema informático. Desarrollé y optimicé módulos clave para fortalecer la integración con servicios externos y garantizar la seguridad de los datos. Utilicé tecnologías como Node.js y Express para construir una arquitectura sólida, respaldada por una base de datos MySQL para una gestión eficiente de la información. Además, implementé prácticas de integración continua con herramientas como Jenkins y Docker, lo que mejoró significativamente la eficiencia del desarrollo. En proyectos de investigación, exploré aplicaciones de blockchain, aplicando conocimientos en Solidity y Ethereum para impulsar la innovación en soluciones empresariales.`
      },
      {
        imageCard: listaRutas.full_stack,
        titleCard: "Desarrollador Full Stack",
        dondeYCuandoCard: "Tech Innovate Solutions (2019-actual):",
        textoCard: `Como desarrollador Full Stack en Tech Innovate Solutions, he tenido la oportunidad de trabajar en una amplia gama de proyectos desafiantes y estimulantes. Desde mi incorporación en 2019, he colaborado con equipos multifuncionales para desarrollar soluciones innovadoras que abordan las necesidades específicas de nuestros clientes. Utilizando tecnologías punteras como React.js, Node.js y MongoDB, he creado aplicaciones web escalables y receptivas que proporcionan experiencias de usuario excepcionales. Además, he participado en todas las etapas del ciclo de vida del desarrollo de software, desde el diseño y la implementación hasta el despliegue y el mantenimiento. Mi tiempo en Tech Innovate Solutions me ha permitido crecer profesionalmente y ampliar mis habilidades técnicas mientras contribuyo al éxito de proyectos impactantes en el mundo de la tecnología.`
      },
      {
        imageCard: listaRutas.web_programming_black,
        titleCard: "Ingeniero de Desarrollo",
        dondeYCuandoCard: "Innovaciones Tecnológicas IOTRI (2016-actual)",
        textoCard: `Ingresé a IOTRI en 2016 como ingeniero de desarrollo y desde entonces he estado inmerso en un emocionante viaje de innovación tecnológica. Mi trabajo en IOTRI ha sido variado y desafiante, abarcando desde el diseño y la implementación de soluciones IoT hasta la colaboración en proyectos de investigación de vanguardia. Una de mis contribuciones más significativas ha sido liderar un equipo en el desarrollo de un sistema de monitorización ambiental basado en sensores IoT para aplicaciones agrícolas. Este proyecto no solo requirió habilidades técnicas sólidas en el diseño de hardware y software, sino también una comprensión profunda de los desafíos específicos del sector agrícola.
        <br>
        Además de mi trabajo en proyectos específicos, he tenido el privilegio de colaborar con colegas de diversos campos y disciplinas en el Laboratorio de Desarrollo Tecnológico de IOTRI. Participar en discusiones interdisciplinarias y trabajar en proyectos conjuntos me ha permitido ampliar mis horizontes y explorar nuevas áreas de interés dentro de la tecnología. Me siento inspirado por el espíritu innovador y la pasión por la excelencia que impregna el ambiente de trabajo en IOTRI, y estoy emocionado por seguir contribuyendo al avance de la tecnología IoT y su impacto positivo en la sociedad.`
      },
      {
        imageCard: listaRutas.algorithm,
        titleCard: "Ingeniero de Investigación",
        dondeYCuandoCard: "Laboratorio de Desarrollo Tecnológico IOTRI (2020-2021)",
        textoCard: `Durante mi tiempo como ingeniero de investigación en el Laboratorio de Desarrollo Tecnológico de IOTRI, tuve la oportunidad de explorar nuevas fronteras en el mundo de la tecnología. Trabajando en estrecha colaboración con un equipo de científicos e ingenieros, participé en proyectos de vanguardia que abarcaban desde la inteligencia artificial hasta la robótica y la realidad aumentada. Utilizando herramientas y metodologías de vanguardia, como el aprendizaje automático y la simulación computacional, contribuí al desarrollo de soluciones innovadoras que tienen el potencial de transformar industrias enteras. Mi tiempo en el laboratorio no solo me permitió expandir mis habilidades técnicas, sino que también me inspiró a seguir persiguiendo la excelencia en la investigación y la innovación tecnológica.`
      }
    ]
};

const ed = {
    title: "Educación",
    listaCards: [
      {
        titleCard: "Bachiller Técnico en Informática",
        dondeYCuandoCard: "Escuela Técnica ORT, Yatay, Buenos Aires (2016-actual)",
        textoCard: `Actualmente cursando el último año de la secundaria con orientación en Informática en la prestigiosa Escuela Técnica ORT. Durante mi tiempo en la escuela, he adquirido una sólida base en informática y tecnología, así como habilidades prácticas en programación, diseño de sistemas y redes informáticas.`
      },
      {
        titleCard: "Curso Avanzado en Desarrollo de Aplicaciones Móviles",
        dondeYCuandoCard: "Instituto de Tecnología Digital (2023)",
        textoCard: `Completé con éxito un curso avanzado en desarrollo de aplicaciones móviles ofrecido por el Instituto de Tecnología Digital. Durante el curso, adquirí habilidades especializadas en el diseño y desarrollo de aplicaciones para plataformas móviles, utilizando tecnologías como Flutter, React Native y Swift. Además, obtuve experiencia práctica en la creación de aplicaciones innovadoras y funcionales que cumplen con los estándares de calidad y usabilidad del mercado actual.`
      }
    ]
};

const ce = {
  //return {//<Certificaciones imageModal={ce.imageModal}/>};
};

const cont = {
    title: "Contacto",
    h5title: "Sigamos en contacto!",
    texto1: "Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal",
    texto2: "¡Gracias por visitar mi sitio web!",
    textoRowIzquierda: "Email:",
    textoRowDerecha: "47699554@est.ort.edu.ar",
    textoButton: "Enviar"
};

const footerComponent = {
    title: "Tiago Shebar",
    texto: "Estudiante de ORT Yatay",
    textoDerechos: `©${new Date().getFullYear()} Tiago Shebar. Todos los derechos reservados`,
    linkButton: "#",
    textoButton: "Enviar"
};

function calcularEdad(fechaNacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(fechaNacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var mes = hoy.getMonth() - cumpleanos.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  return edad;
}