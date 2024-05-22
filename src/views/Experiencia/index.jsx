import Card from "../../components/Card";
import {styles} from "./style"

const Experiencia = (props) => {
    return (
        <div>
            <h2 style={styles.title}>{props.titulo}</h2>
            <div style={styles.contenedorExterior}>
                <div style={styles.contenedorInterior}>
                        {props.listaCards.map((element, index) => (
                            <Card style={styles.elemento} key={index} imagen={element.imageCard} title={element.titleCard} dondeYCuando={element.dondeYCuandoCard} texto={element.textoCard}/>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Experiencia;