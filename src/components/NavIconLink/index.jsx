import IconLink from "../IconLink";

const NavIconLink = (props) => {
    console.log(props.listaIconLink);
    return (
        <div>
            {
                (props.listaIconLink || []).map((element, index) => (
                    <IconLink key={index} link={element.link} icon={element.icon} />
                ))
            }
        </div>
    )
}

export default NavIconLink;