const ImageText = (props) => {

    return (
        <>
            <div>
                <img src={props.image}></img>
                <h4>{props.name}</h4>
            </div>
        </>
    )
}

export default ImageText;