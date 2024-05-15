import {styles} from "./style"
import Button from "../Button";

const Form = (props) => {
    return (
        <form>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" required></input>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required></input>
            </div>
            <div>
                <label for="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje" required></textarea>
            </div>
            <input type="submit"><Button link={props.linkButton} texto={props.textoButton}/></input>
        </form>
    )
}

export default Form;

