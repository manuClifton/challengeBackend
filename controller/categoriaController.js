const Categoria = require('../models/Categoria');
const { validationResult } = require('express-validator');


//Obtiene todos las categorias
exports.obtenerCategorias = async (req, res) =>{

    try {
        const categorias = await Categoria.findAll({
            attributes: ["id", "nombre"]
        })
        
        if(categorias.length == 0){
            res.status(404).json({ msg: 'CATEGORIAS VACIAS'});
        }else{
            res.json(categorias);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Hubo un error en el get de CATEGORIAS'});
    }
}

//Crear categoria
exports.crearCategoria = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);

    if(!errors.isEmpty()){ // si hay errores los muestro
        console.log('Hay un error en el postman');
        return res.status(400).json({ errors: errors.array() })
    }
    
    try {
        //crea el posteo
        let categoria = await Categoria.create(req.body);
        const {id, nombre} = categoria;
        //Mensaje
        res.json({id, nombre});
        res.status(200).send('Categoria creado');
        res.status(201).json(req.body);
        
    } catch (error) {
 
        res.status(400).json(error);
        //res.status(400).json({ error: 'Bad Request, invalid or missing input' });
    }
}