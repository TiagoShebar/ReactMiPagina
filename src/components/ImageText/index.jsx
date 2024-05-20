import {styles} from "./style"

const ImageText = (props) => {

    return (
        <>
            <div>
                <img src={props.image} style={styles.image}></img>
                <h4>{props.name}</h4>
            </div>
        </>
    )
}

export default ImageText;