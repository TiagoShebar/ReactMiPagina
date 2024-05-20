export const styles = {
    contenedorInterior: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "50%",
        margin: "0 auto",
        justifyContent: "space-around"
    },
    elemento: {
        flexBasis: "calc(50% - 10px)", // 50% del contenedor menos 10px de margen
        margin: "20%", // Margen para separar los elementos
        boxSizing: "border-box"// Para incluir el margen en el tamaño total
    }

}