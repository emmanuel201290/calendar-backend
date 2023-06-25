const {response} = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response)=>{
    
    const {name, email, password} = req.body

   /* if( name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre es menor de 5 caracteres'
        })
    }*/

    res.status(201).json({
        ok: true,
        msg: 'Registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res)=>{

    const {email, password} = req.body

    res.json({
        ok: true,
        msg: 'Login',
        email,
        password
    })
}

const revalidarToken = (req, res)=>{
   
    res.json({
        ok: true,
        msg: 'renew'
    })
}
module.exports = {
    crearUsuario, loginUsuario, revalidarToken
}