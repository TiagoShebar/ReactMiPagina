import ImageText from "../../components/ImageText";
import {styles} from "./style"

const Conocimientos = (props) => {
    return (
        <div style={styles.contenedorSuperior}>
            <h2>{props.title}</h2>
            <div style={styles.contenedorInterior}>
                {
                    (props.listaImageText || []).map((element, index) => (
                        <ImageText key={index} image={element.image} name={element.name}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Conocimientos;