function formulario(datos, datos_obligatorios, datos_opcionales) {
    const errors = [];
    const expresion_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //validad de correo electronico
    
    datos_obligatorios.forEach((campo) => {
        if (!datos[campo]) {
            errors.push(`El campo ${campo} es requerido.`);
        }
    });
    
    datos_opcionales.forEach((campo) => {
        if (datos[campos] && campo === "correo" && !expresion_email.test(datos[campo])) {
            errors.push("El correo electrónico no es válido");
        }
        if (data[campo] && campo == "fecha" && isNaN(Date.parse(datos[campos]))) {
            errors.push("La fecha no es válida")
        }
    });

    return errors;
}

module.exports = { formulario }