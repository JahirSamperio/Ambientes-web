import jwt from 'jsonwebtoken';

const home = async (req, res) => {
    try {
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
        
        res.render('PaginaCursos', {
            autenticado: autenticado
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const registro = async (req, res) => {
    try {
        res.render('Registro');
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const historia =async (req, res) => {
    try {
        res.render('Historia');
    } catch (error) {
        return error.status(500).json({
            error: "Error en el servidor"
        })
    }


}

const curso = async (req, res) => {
    try {
        res.render('Curso');
    } catch (error) {
        return error.status(500).json({
            error: "Error en el servidor"
        })
        
    }
}


export {
    home,
    registro,
    historia,
    curso
}