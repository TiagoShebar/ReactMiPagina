import Card from "../../components/Card";
import {styles} from "./style";

const Educacion = (props) => {
    return (
        <div>
            <h2 style={styles.title}>{props.title}</h2>
            <div>
                {
                    (props.listaCards || []).map((element, index) => (
                        <Card key={index} title={element.titleCard} dondeYCuando={element.dondeYCuandoCard} texto={element.textoCard}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Educacion;