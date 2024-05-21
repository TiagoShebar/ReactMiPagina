import Card from "../../components/Card";
import {styles} from "./style"

const Experiencia = (props) => {
    const cards = props.listaCards || [];
    const firstRow = cards.slice(0, 2);
    const secondRow = cards.slice(2);

    return (
        <div>
            <h2 style={styles.title}>{props.titulo}</h2>
            <div style={styles.contenedorExterior}>
                <div style={styles.contenedorInterior}>
                        {firstRow.map((element, index) => (
                            <Card style={styles.elemento} key={index} imagen={element.imageCard} title={element.titleCard} dondeYCuando={element.dondeYCuandoCard} texto={element.textoCard}/>
                        ))}
                </div>
                <div style={styles.contenedorInterior}>
                        {secondRow.map((element, index) => (
                            <Card style={styles.elemento} key={index} imagen={element.imageCard} title={element.titleCard} dondeYCuando={element.dondeYCuandoCard} texto={element.textoCard}/>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Experiencia;