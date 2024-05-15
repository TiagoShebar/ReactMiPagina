import Form from "../../components/Form";

const Contacto = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <Form/>
            <div>
                <h5></h5>
                <p></p>
                <p></p>
                <div>{props.textoRowIzquierda}     {props.textoRowDerecha}</div>
            </div>
        </div>
        
    )
}   

export default Contacto;