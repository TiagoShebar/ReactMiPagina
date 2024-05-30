import {styles} from "./style"

const NavLink = (props) => {
    return (
        <b><a style={styles.animatedLink} href={props.link}>{props.texto}</a></b>
    )
}

export default NavLink;