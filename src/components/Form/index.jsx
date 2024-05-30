import { styles } from "./style";
import Button from "../Button";

const Form = (props) => {
    return (
        <form style={styles.formContainer}>
            <div style={styles.inputGroup}>
                <label htmlFor="nombre" style={styles.label}>Nombre</label>
                <input type="text" name="nombre" id="nombre" required style={styles.input}></input>
            </div>
            <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input type="email" name="email" id="email" required style={styles.input}></input>
            </div>
            <div style={styles.inputGroup}>
                <label htmlFor="mensaje" style={styles.label}>Mensaje</label>
                <textarea name="mensaje" id="mensaje" required style={styles.textarea}></textarea>
            </div>
            <div style={styles.buttonContainer}>
                <Button type="submit" texto={props.textoButton}/>
            </div>
        </form>
    )
}

export default Form;

