import Card from "../../components/Card";
import {styles} from "./style"

const Experiencia = (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <div style={styles.contenedorInterior}>
                {
                    (props.listaCards || []).map((element, index) => (
                        <Card style={styles.elemento} key={index} imagen={element.imageCard} title={element.titleCard} dondeYCuando={element.dondeYCuandoCard} texto={element.textoCard}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiencia;