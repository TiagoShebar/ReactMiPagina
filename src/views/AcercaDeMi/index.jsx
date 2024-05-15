import Button from "../../components/Button";
import IconLink from "../../components/IconLink";

const AcercaDeMi = (props) => {
    return (
        <div>
            <div>
                <img src={props.image}></img>
            </div>
            <div>
                <div>
                    <p>{props.textoPrimero}</p>
                    <h1>{props.titulo}</h1>
                    <p>{props.textoSegundo}</p>
                    <div>
                        {
                            props.listaIconLink.forEach(element => {
                                return <IconLink link={element.link} icon={element.icon} />
                            })
                        }
                    </div>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default AcercaDeMi;