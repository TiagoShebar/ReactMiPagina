import {styles} from "./style";
import NavIconLink from "../NavIconLink";

const FooterComponent = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.texto}</p>
            <NavIconLink/>
            <div>{props.textoDerechos}</div>
        </div>
    )
}

export default FooterComponent;

