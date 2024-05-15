const AcercaDeMi = (props) => {
    return (
        <div>
            <div>
                <h2>{props.titulo}</h2>
                <p>{props.texto2}</p>
                <div>
                    <div>{props.textoRowIzquierda1}     {props.textoRowDerecha1}</div>
                    <div>{props.textoRowIzquierda2}     {props.textoRowDerecha2}</div>
                </div>
                <p>{props.texto2}</p>
            </div>
            <div>
                <img src={props.image}></img>
            </div>
        </div>
    )
}

export default AcercaDeMi;