import IconLink from "../IconLink";

const IconLink = (props) => {
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

export default IconLink;