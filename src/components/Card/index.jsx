import {styles} from "./style"

const Card = (props) => {
    var imagen;
    if(props.imagen){
        imagen = <img src={props.imagen} alt=""></img>
    }
    return (
            <article style={styles.contenedorTodo}>
                <div style={styles.contenedorSuperior}>
                    <div>
                        <h4>{props.title}</h4>
                        <p>{props.dondeYCuando}</p>
                    </div>
                    {imagen}
                </div>
                <div>
                    <p>{props.texto}</p>
                </div>
            </article>
    )
}

export default Card;