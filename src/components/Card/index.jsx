import { styles } from "./style";

const Card = (props) => {
    return (
        <article style={styles.contenedorTodo}>
            <div style={styles.contenedorSuperior}>
                <div>
                    <h4 style={styles.title}>{props.title}</h4>
                    <p style={styles.subtitle}>{props.dondeYCuando}</p>
                </div>
                <div style={styles.imageContainer}>
                    {props.imagen && <img style={styles.image} src={props.imagen} alt="" />}
                </div>
            </div>
            <div>
                <p style={styles.texto}>{props.texto}</p>
            </div>
        </article>
    );
};

export default Card;

