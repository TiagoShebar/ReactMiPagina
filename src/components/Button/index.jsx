import { styles } from "./style";

const Button = (props) => {
    var button;
    if(props.type){
        button = <button type={props.type} style={styles.button}><b>{props.texto}</b></button>
    }
    else{
        button = <button style={styles.button}>
                    <a href={props.link} style={{ textDecoration: 'none', color: 'inherit' }}><b>{props.texto}</b></a>
                </button>
    }
    return (
        button
    )
}

export default Button;