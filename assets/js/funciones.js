

const validarCorreo=(correo)=>{
    return  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo.trim());
}

const validarPassword=(password)=>{
    return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\s{8,16}$/.test(password.trim());
}
const validarNombre=(nombre)=>{
    return /^[a-z0-9ü][a-z0-9ü_]{3,9}$/.test(nombre.trim());
}