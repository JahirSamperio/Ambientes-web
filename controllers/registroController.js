import {check, validationResult} from 'express-validator'
import {registroUser, buscarUsuario, verificarPass} from '../models/registroModel.js'
import { conexion } from '../db/conexion.js';
import { generarJWT, generateId } from "../helpers/tokens.js";
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';

const registrarUsuario = async (req, res) => {
    try {
        await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req);
        await check('correo').notEmpty().withMessage('El correo es obligatorio').run(req);
        await check('password').notEmpty().withMessage('El password es obligatorio').run(req);

        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.status(400).json({
                errores: errores.array()
            })
        }
        // verificar
        const existeUsuario = await usuario.findOne({ where : {correo}});
            if(existeUsuario){
                return res.render('alertas', {
                    mensaje: "Este Usuario ya existe"
                }); 
            }

        // const {nombre, correo, password} = req.body;

        const signup = await registroUser(req.body)
        return res.redirect('http://localhost:8080/Curso');
        // return res.status(200).json({
        //     message: "Usuario registrado correctamente"

    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

//Mostrar 
conexion.query("SELECT * FROM usuario", function(error, filas){
    if(error){
        throw error;
    }else{
        filas.forEach(fila => {
            // console.log(fila);
        })

    }
})

const login = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

//Autenticacion del usuario
const autenticar = async (req = request, res = response) => {
    try {
        //Validacion 
        await check('email').isEmail().withMessage('Correo no valido').run(req);
        await check('password').notEmpty().withMessage('Contraseña obligatoria').run(req);
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }

        //Extraer datos
        const { email, password } = req.body;

        //Verificar si el usuario existe
        const usuario = await buscarUsuario(email);
        if (!usuario) {
            return res.status(404).json({
                msg: "Usuario no existente"
            })
        }

        // //Verificar si el usuario confirmo su cuenta
        // if (!usuario.confirmado) {
        //     return res.status(404).json({
        //         msg: "Esta cuenta no esta confirmada"
        //     })
        // }


        const verificar = verificarPass(email, password);
        //Revisar password
        if (!verificar) {
            return res.status(401).json({
                msg: "La contraseña es incorrecta"
            })
        }

        //Autenticar usuario
        const token = generarJWT(usuario.id_usuario);

        //Almacenar en un cookie
        res.cookie('_token', token, {
            httpOnly: true,
            //secure: true
        })

        // const id_usuario =usuario.id_usuario

        // await Usuario.update({
        //     autenticado: true
        // }, {
        //     where: { email }
        // })

        // const lecciones = await Leccion.findAll();

        const {_token} = req.cookies;

        let tokenId;
        let autenticado;
        if(_token){
            autenticado=true;
            const token = jwt.verify(_token, process.env.JWT_SECRET);
            tokenId = token.id;
        } else {
            autenticado=false
        }

        // res.render('index', {
        //     lecciones: lecciones,
        //     autenticado: autenticado,
        //     token: tokenId,
        //     id_usuario
        // });
        // Redireccionar o enviar una respuesta JSON u HTML indicando que la sesión se ha cerrado
        res.redirect('http://localhost:8080');

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Ocurrió un error al intentar autenticar'
        });
    }
}


export {
    registrarUsuario,
    autenticar
}