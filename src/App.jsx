import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Inicio from "./views/Inicio";
import AcercaDeMi from "./views/AcercaDeMi";
import Conocimientos from "./views/Conocimientos";
import Experiencia from "./views/Experiencia";
import Educacion from "./views/Educacion";
import Certificaciones from "./views/Certificaciones";
import Contacto from "./views/Contacto";
import FooterComponent from "./components/FooterComponent";
import algorithm from "./vendor/services/algorithm.svg";
import app_development from "./vendor/services/app-development.svg";
import blockchain from "./vendor/services/blockchain.svg";
import full_stack from "./vendor/services/full-stack.svg";
import server from "./vendor/services/server.svg";
import ui_ux from "./vendor/services/ui-ux.svg";
import web_programming from "./vendor/services/web-programming-grande.svg";
import binker from "./vendor/services/binker.png";
import hello from "./vendor/ilustrations/hello3.svg";

const listaRutas = {
  algorithm,
  app_development,
  blockchain,
  full_stack,
  server,
  ui_ux,
  web_programming,
  binker,
  hello
};

function App() {
  return (
    <>
      <header><NavBar navLinkPrincipal={navBar.navLinkPrincipal} listaNavlink={navBar.lista}/></header>
      <main style={{paddingTop: "7.5vh"}}>
        <section id="inicio"><Inicio image={i.image} textoPrimero={i.textoPrimero} titulo={i.titulo} textoSegundo={i.textoSegundo} listaIconLink={i.listaIconLink} linkButton={i.linkButton} textoButton={i.textoButton}/></section>
        <div class="divImagen"></div>
        <section id="acerca-de-mi"><AcercaDeMi titulo={a.titulo} texto1={a.texto1} textoRowIzquierda1={a.textoRowIzquierda1} textoRowDerecha1={a.textoRowDerecha1} textoRowIzquierda2={a.textoRowIzquierda2} textoRowDerecha2={a.textoRowDerecha2} texto2={a.texto2} image={a.image}/></section>
        <section id="conocimientos"><Conocimientos title={cono.title} listaImageText={cono.listaImageText}/></section>
        <section id="experiencia"><Experiencia titulo={ex.titulo} listaCards={ex.listaCards}/></section>
        <section id="educacion"><Educacion titulo={ed.title} listaCards={ed.listaCards}/></section>
        <section id="contacto"><Contacto title={cont.title} h5title={cont.h5title} texto1={cont.texto1} texto2={cont.texto2} textoRowIzquierda={cont.textoRowIzquierda} textoRowDerecha={cont.textoRowDerecha}/></section>
      </main>
      <footer><FooterComponent title={footerComponent.title} texto={footerComponent.texto} listaIconLink={footerComponent.listaIconLink} textoDerechos={footerComponent.textoDerechos}/></footer>
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
      { link: '#certificaciones', texto: 'Certificaciones' },
      { link: '#contacto', texto: 'Contacto' }
    ],
   navLinkPrincipal: { link: '#inicio', texto: 'Ezequiel Binker' }
};

const listaIconLink = [{ link: "#", icon: "a" }, { link: "#", icon: "a" }, { link: "#", icon: "a" }];


const i = {
    image: listaRutas.hello,
    textoPrimero: "HOLA!",
    titulo: "Soy Ezequiel Binker",
    textoSegundo: "Licenciado en Sistemas y Profesor de Programación",
    listaIconLink: listaIconLink,
    linkButton: "#",
    textoButton: "Contactame!=>"
};


const a = {
    titulo: "Hola! Me llamo Ezequiel Binker.",
    texto1: "Soy Licenciado en Sistemas recibido en la Universidad de Palermo. Además, hace más de 9 años que trabajo en educación IT, transmitiendo los conceptos de programación a cientos de jóvenes de nivel secundario y terciario.",
    textoRowIzquierda1: "Edad:",
    textoRowDerecha1: "29 años",
    textoRowIzquierda2: "Email:",
    textoRowDerecha2: "ezebinker@gmail.com",
    texto2: "Mis conocimientos en educación me permiten comunicar mis pensamientos e intenciones de una manera clara y eficiente. Además, cuento con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.",
    image: listaRutas.binker
};

const cono = {
    title: "Conocimientos",
    listaImageText: [
      { image: listaRutas.web_programming, name: "Desarrollo Web" },
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
        dondeYCuandoCard: "Wadiah Capital. (2021-2023)",
        textoCard: `Trabajé durante 2 años en el rediseño funcional del sistema informático de Wadiah Capital. Comencé a cargo de un módulo que realiza una integración con servicios crypto, para luego quedar a cargo del core bancario. El stack de backend utilizado está comprendido por Nest.js (Express) conectado a una base de datos SQL Server. Además, otras herramientas utilizadas durante mi trabajo día a día son : Redis, CircleCI, Docker, Sentry y Azure. Dentro de mis tareas de I+D realicé algunos proyectos crypto, en los cuales puse en práctica conocimientos de Solidity, Pinata Cloud y OpenSea
        <br>
        <br>
        El stack de backend utilizado está comprendido por Nest.js (Express) conectado a una base de datos SQL Server. Además, otras herramientas utilizadas durante mi trabajo día a día son : Redis, CircleCI, Docker, Sentry y Azure.
        \n
        \n
        Dentro de mis tareas de I+D realicé algunos proyectos crypto, en los cuales puse en práctica conocimientos de Solidity, Pinata Cloud y OpenSea`
      },
      {
        imageCard: listaRutas.full_stack,
        titleCard: "Desarrollador Full Stack",
        dondeYCuandoCard: "Freelance. (2019-actual)",
        textoCard: `Durante este tiempo, he adquirido experiencia en proyectos personales, tanto en el desarrollo Frontend utilizando tecnologías como HTML, CSS, y React.js, como en el desarrollo Backend empleando TypeScript, Node.js y Nest.js. Además, he incursionado en el desarrollo móvil utilizando React Native.
        \n
        \n
        Mis habilidades destacadas se centran en el uso de NestJS y TypeScript, áreas en las que he acumulado experiencia significativa a lo largo de mi trayectoria profesional.`
      },
      {
        imageCard: listaRutas.web_programming,
        titleCard: "Profesor de Informática",
        dondeYCuandoCard: "Escuela ORT. (2016-actual)",
        textoCard: `Mi experiencia docente en ORT Argentina ha sido variada y enriquecedora, desempeñando múltiples roles que han moldeado mi trayectoria en educación informática. En "Taller de Programación", enseño fundamentos en desarrollo informático: desde C# hasta HTML, CSS, Bootstrap, MVC en .NET Core, Dapper ORM y JavaScript para bases de datos y vistas dinámicas.
        \n
        \n
        En "Proyectos de Producción", guío a alumnos en la integración de sus conocimientos en un proyecto propio, destacando buenas prácticas de programación, trabajo en equipo, gestión de recursos y metodologías ágiles.
        \n
        \n
        Como profesor de Diseño Web, priorizo el enfoque centrado en el usuario, UX, UI y Design Thinking con HTML, CSS para productos digitales significativos.
        \n
        \n
        En "Bases de Datos" y "Tecnologías de la Información", complemento el estudio técnico con bases de hardware para soluciones informáticas acordes a las necesidades del cliente.`
      },
      {
        imageCard: listaRutas.algorithm,
        titleCard: "Profesor de Taller de Programación",
        dondeYCuandoCard: "Instituto ORT. (2020-2021)",
        textoCard: `Impartí conocimientos en el "Taller de Herramientas de Programación", abordando desde algoritmos simples en Java hasta programación orientada a objetos y estructuras de control, preparando a los estudiantes de nivel terciario para comprender las complejidades del desarrollo informático.`
      }
    ]
};

const ed = {
    title: "Educación",
    listaCards: [
      {
        titleCard: "Licenciado en Sistemas",
        dondeYCuandoCard: "Universidad de Palermo (2018-2020)",
        textoCard: `Trabajo Final de Grado : "Bot Docente". Proyecto desarrollado en Python utilizando Telegram Bot API y librerías de IA, como SpaCy y NLTK. Despliegue de un bot conversacional disponible en la plataforma Telegram, como apoyo complementario a la labor docente.`
      },
      {
        titleCard: "Analista de Sistemas",
        dondeYCuandoCard: "Instituto Tecnológico ORT (2013-2017)",
        textoCard: `Proyecto Final destacado: Desarrollo de una aplicación web PHP para un emprendimiento de Yoga y Pilates.
        <br>
        Tecnologías: Symfony Framework (PHP), MySQL, Amazon Web Services`
      },
      {
        titleCard: "Bachiller Técnico con orientación en Informática",
        dondeYCuandoCard: "Escuela ORT (2007-2012)",
        textoCard: `Proyecto final Destacado: Desarrollo de una aplicación desktop para la creación de partituras musicales utilizando la tecnología de Microsoft Kinect, en el framework .NET .`
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
    textoRowDerecha: "ezebinker@gmail.com"
};

const footerComponent = {
    title: "Ezequiel Binker",
    texto: "Licenciado en Sistemas y Profesor de Programación",
    listaIconLink: listaIconLink,
    textoDerechos: "©2024 Ezequiel Binker. Todos los derechos reservados",
    linkButton: "#",
    textoButton: "Enviar"
};