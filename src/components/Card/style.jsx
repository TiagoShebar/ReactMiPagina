export const styles = {
    contenedorTodo: {
        borderRadius: "2px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        width: "80%", // 80% del ancho del contenedor padre // Ancho máximo del 30% del viewport width
        margin: "0 auto", // Centrado horizontal // Espaciado interno del 2% del viewport width
    },
    contenedorSuperior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", // Alinea los elementos al principio y al final del contenedor
        backgroundColor: "grey",
        padding: "2vw", // Espaciado interno del 2% del viewport width
    },
    imageContainer: {
        display: "flex",
        alignItems: "center", // Alinea verticalmente la imagen en el contenedor
    },
    image: {
        width: "10%", // 20% del ancho del contenedor para la imagen// Ancho máximo del 10% del viewport width
        height: "auto",
        marginLeft: "12vw", // Espacio entre la imagen y el contenido de texto del 2% del viewport width
    }
}

