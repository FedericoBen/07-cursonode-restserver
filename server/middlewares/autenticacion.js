let jwt = require('jsonwebtoken');

//======================
//Verificar el token
//======================

const { JsonWebTokenError } = require("jsonwebtoken");
const usuarios = require('../models/usuarios');

let verificarToken = (req, res, next) => {

    //asi se obtienen los headers
    let token = req.get('token');
    // res.json({
    //     token: token
    // })

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: 'token no valido'
            });
        }
        req.usuario = decoded.usuario;
        next();
    })


}


//======================
//Verificar el role
//======================

let verificarRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        console.log('\n\nVerificacion de Role exitosa\n\n');
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: 'Noo tiene el nivel suficiente para agregar usuarios'
        });
    }

}

module.exports = {
    verificarToken,
    verificarRole
}