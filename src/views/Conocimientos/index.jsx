import ImageText from "../../components/ImageText";

const Conocimientos = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                {
                    props.listaImageText.forEach(element => {
                        return <ImageText image={element.image} name={element.name} />
                    })
                }
            </div>
        </div>
    )
}

export default Conocimientos;