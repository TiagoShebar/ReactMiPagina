import { styles } from "./style";

const Button = (props) => {
    return (
        <button style={styles.button} href={props.link}><b>{props.texto}</b></button>
    )
}

export default Button;