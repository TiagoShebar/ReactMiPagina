export const styles = {
    contenedorInterior: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "70%",
        margin: "0 auto",
        justifyContent: "space-between"
    },
    elemento: {
        flexBasis: "calc(50% - 10px)", // 50% del contenedor menos 10px de margen
        margin: "5px", // Margen para separar los elementos
        boxSizing: "border-box" // Para incluir el margen en el tamaño total
    }

}