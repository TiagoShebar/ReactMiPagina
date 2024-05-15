import ImageText from "../../components/ImageText";

const Conocimientos = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                {
                    props.listaImageText.forEach(element => {
                        return <ImageText link={element.image} icon={element.name} />
                    })
                }
            </div>
        </div>
    )
}

export default Conocimientos;