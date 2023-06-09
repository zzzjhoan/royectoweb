

const validarCorreo=(correo)=>{
    return  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo.trim());
}

const validarPassword=(password)=>{
    return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password.trim());
}
const validarNombre=(nombre)=>{
    return /^([a-z ñáéíóû]{2,60})$/i.test(nombre.trim());
}