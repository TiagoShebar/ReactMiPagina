import Form from "../../components/Form";

const Contacto = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <Form/>
                <div>
                    <h5>{props.h5title}</h5>
                    <p>{props.texto1}</p>
                    <p>{props.texto2}</p>
                    <div>{props.textoRowIzquierda}     {props.textoRowDerecha}</div>
                </div>
            </div>
        </div>
        
    )
}   

export default Contacto;