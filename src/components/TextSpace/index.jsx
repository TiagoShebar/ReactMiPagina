const TextSpace = (props) => {
    return (
        <div>
            <span><i class={props.icono}></i></span>
            <span>{props.texto}</span>
        </div>
    )
}

export default TextSpace;