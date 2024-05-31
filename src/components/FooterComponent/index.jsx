import {styles} from "./style";

const FooterComponent = (props) => {
    return (
        <div style={{backgroundColor: "#F6DCAC", marginTop: "-15%", paddingTop: "17.5%", textAlign: "center"}}>
            <div style={{ marginTop: "-5%", paddingBottom: "2%"}}>
                <h4 style={{textAlign: "center", fontSize: "1.7rem", fontWeight: "600"}}>{props.title}</h4>
                <p style={{marginTop: "-1%"}}>{props.texto}</p>
                <div style={{fontSize: "0.9rem", marginTop: "2%"}}>{props.textoDerechos}</div>
            </div>
        </div>
    )
}

export default FooterComponent;

