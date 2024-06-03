export const styles = {
    contenedorExterior: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: "0 auto",
        paddingTop: "2%"
    },
    contenedorInterior: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexBasis: "calc(40% - 10px)"
    },
    elemento: {
        flexBasis: "calc(50% - 10px)", // 50% del contenedor menos 10px de margen
        boxSizing: "border-box",
        width: "50%", // Para incluir el margen en el tamaño total
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: "2.3rem", 
        fontWeight: "600"
    },
    bloque: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "2%"
    }
};