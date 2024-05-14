const home = async (req, res) => {
    try {
        res.render('PaginaCursos');
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