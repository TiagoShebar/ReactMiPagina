import NavLink from "../NavLink"

const listaNavlink = [
    { link: 'enlace1', texto: 'texto1' },
    { link: 'enlace2', texto: 'texto2' },
    { link: 'enlace3', texto: 'texto3' },
    { link: 'enlace3', texto: 'texto3' },
    { link: 'enlace3', texto: 'texto3' },
    { link: 'enlace3', texto: 'texto3' }
];

const NavBar = () => {

    return (
        <>
            <div>
                <NavLink link="#" texto="Nombre" />
            </div>

            <div>
                {
                    listaNavlink.forEach(element => {
                        return <NavLink link={element.link} texto={element.texto} />
                    })
                }
            </div>
        </>
    )
}

export default NavBar;