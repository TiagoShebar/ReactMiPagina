import NavLink from "../NavLink"

const NavBar = (props) => {

    return (
        <>
            <div>
                <NavLink link={props.listaNavlink[0].link} texto={props.listaNavlink[0].texto} />
            </div>

            <div>
                {
                    props.listaNavlink.forEach(element => {
                        return <NavLink link={element.link} texto={element.texto} />
                    })
                }
            </div>
        </>
    )
}

export default NavBar;