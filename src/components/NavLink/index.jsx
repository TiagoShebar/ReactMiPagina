import {styles} from "./style"

const NavLink = (props) => {
    return (
        <a style={styles.animatedLink} href={props.link}>{props.texto}</a>
    )
}

export default NavLink;