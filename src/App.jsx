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


const importImages = (variable, ruta) => {
  return import(ruta)
    .then(module => {
      return module.default;
    })
    .then(image => {
      return variable = image;
    })
    .catch(error => {
      console.error('Error al importar la imagen:', error);
    });
};

/*let miImagen;

importImages(miImagen, './ruta/de/la/imagen.jpg').then(() => {
  console.log('Imagen importada:', miImagen);
});
*/

function App() {
  return (
    <>
      <header><NavBar/></header>
      <main>
        <Inicio/>
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
