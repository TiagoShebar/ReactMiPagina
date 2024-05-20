import Card from "../../components/Card";

const Experiencia = (props) => {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <div>
                {
                    (props.listaCards || []).map((element, index) => (
                        <Card key={index} imagen={element.imageCard} title={element.titleCard} dondeYCuando={element.dondeYCuandoCard} texto={element.textoCard}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiencia;