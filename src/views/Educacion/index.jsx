import Card from "../../components/Card";

const Educacion = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                {
                    props.listaCards.forEach(element => {
                        return <Card imagen={element.imageCard} title={element.titleCard} dondeYCuando={element.dondeYCuandoCard} texto={element.textoCard}/>
                    })
                }
            </div>
        </div>
    )
}

export default Educacion;