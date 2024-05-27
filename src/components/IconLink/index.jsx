const IconLink = (props) => {

console.log(props.icon)
    return (
        <a href={props.link} target="_blank">{props.icon}</a>
    )
}

export default IconLink;