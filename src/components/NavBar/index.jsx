import NavLink from "../NavLink"
import {styles} from "./style"

const NavBar = (props) => {

    return (
        <div style={styles.contenedorSuperior}>
            <div>
                <NavLink link={props.navLinkPrincipal.link} texto={props.navLinkPrincipal.texto} />
            </div>

            <div>
                {
                    (props.listaNavlink || []).map((element, index) => (
                        <NavLink key={index} link={element.link} texto={element.texto} />
                    ))
                }
            </div>
        </div>
    )
}

export default NavBar;