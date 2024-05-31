import { styles } from "./style";

const Card = (props) => {
    var parrafo = props.texto.split('<br>');
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
                        {parrafo.map((element, index) => (
                            <p style={styles.texto}>{element}</p>
                        ))}
            </div>
        </article>
    );
};

export default Card;

