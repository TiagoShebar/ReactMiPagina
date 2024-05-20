import Button from "../../components/Button";
import NavIconLink from "../../components/NavIconLink"
import {styles} from "./style"

const Inicio = (props) => {
    console.log(props.listaIconLink);
    return (
        <div style={styles.divSuperior}>
            <div>
                <img src={props.image}></img>
            </div>
                <div>
                    <p>{props.textoPrimero}</p>
                    <h1>{props.titulo}</h1>
                    <p>{props.textoSegundo}</p>
                    <div>
                        <NavIconLink listaIconLink={props.listaIconLink}/>
                    </div>
                    <Button link={props.linkButton} texto={props.textoButton}/>
                </div>
        </div>
    )
}

export default Inicio;

