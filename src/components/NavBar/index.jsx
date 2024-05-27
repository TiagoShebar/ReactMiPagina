import NavLink from "../NavLink"
import {styles} from "./style"

const NavBar = (props) => {

    return (
        <div style={{backgroundColor: "#F6DCAC"}}>
        <div style={styles.contenedorSuperior}>
            <div style={styles.contenedorUnico}>
                <NavLink link={props.navLinkPrincipal.link} texto={props.navLinkPrincipal.texto} />
            </div>

            <div style={styles.contenedorMultiple}>
                {
                    (props.listaNavlink || []).map((element, index) => (
                        <NavLink key={index} link={element.link} texto={element.texto} />
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default NavBar;