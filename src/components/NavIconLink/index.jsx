import IconLink from "../IconLink";

const NavIconLink = (props) => {
    return (
        <div>
            {
                props.listaIconLink.forEach(element => {
                    return <IconLink link={element.link} icon={element.icon} />
                })
            }
        </div>
    )
}

export default NavIconLink;