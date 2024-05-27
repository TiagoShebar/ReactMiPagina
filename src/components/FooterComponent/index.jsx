import {styles} from "./style";

const FooterComponent = (props) => {
    return (
        <div style={{backgroundColor: "#F6DCAC", marginTop: "-15%", paddingTop: "17.5%", textAlign: "center"}}>
            <h4>{props.title}</h4>
            <p>{props.texto}</p>
            <div>{props.textoDerechos}</div>
        </div>
    )
}

export default FooterComponent;

