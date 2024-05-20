import {styles} from "./style"

const AcercaDeMi = (props) => {
    return (
        <div style={styles.contenedorSuperior}>
            <div style={styles.contenedorSinImagenSuperior}>
                <h2>{props.titulo}</h2>
                <p>{props.texto1}</p>
                <div>
                    <div>{props.textoRowIzquierda1}     {props.textoRowDerecha1}</div>
                    <div>{props.textoRowIzquierda2}     {props.textoRowDerecha2}</div>
                </div>
                <p>{props.texto2}</p>
            </div>
            <div>
                <img src={props.image} style={styles.image}></img>
            </div>
        </div>
    )
}

export default AcercaDeMi;

