import {styles} from "./style"

const ImageText = (props) => {

    return (
        <>
            <div>
                <img src={props.image} style={styles.image}></img>
                <h5 style={styles.h5}>{props.name}</h5>
            </div>
        </>
    )
}

export default ImageText;