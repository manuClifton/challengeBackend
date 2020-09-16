const Post = require('../models/Post');
const { validationResult } = require('express-validator');


//Obtiene todos los posts
exports.obtenerPosts = async (req, res) =>{

    try {
        //const posteos = await Post.find().sort({fecha: -1});
        const posts = Post.findAll();
       // res.status(200).json({posteos});
        res.send('entra correctamente. FUNCIONA');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error en el get');
        res.send(' NO FUNCIONA');
    }
}
/*
//Crear posteo nuevo
exports.crearPost = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);

    if(!errors.isEmpty()){ // si hay errores los muestro
        console.log('Hay un error en el postman')
        return res.status(400).json({ errors: errors.array() })
    }
    
    try {
          //crea el posteo
        
        //guarda el posteo
    
        //Mensaje
        res.status(200).send('Posteo creado');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

//Actualizar un post
exports.actualizarPost = async (req, res) =>{

    const { titulo, contenido } = req.body;

    const nuevoPost = {};

    if(titulo){
        nuevoPost.titulo = titulo;
    }
    if(contenido){
        nuevoPost.contenido = contenido;
    }

    try {
        //revisar id
        console.log(req.params.id);
        let posteo = await Post.findById(req.params.id);
        //verificar si existe
        if(!posteo){
            return res.status(404).json({ msg: 'No se econtro el Post'})
        }
        //actualizar
        posteo = await Post.findByIdAndUpdate( {_id: req.params.id}, {$set: nuevoPost}, {new: true} );
        res.status(200).json({posteo});
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error PUT en el servidor')
    }
}

//Elimina un posteo por su ID
exports.eliminarPost = async (req,res) =>{

    //Obtener el proyecto
    
    try {
        //Revisar el ID
        let posteo = await Post.findById(req.params.id);

        //verificar si existe
        if(!posteo){
            return res.status(400).json({ msg: 'No se econtro el Post'})
        }

        //Eliminar
        await Post.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({msg: 'Posteo eliminado'});

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error de DELETE en el servidor')
    }
}

//elimimar todos los posteos
exports.eliminarPosteos = async (req,res) =>{


    try {
        let posteos = await Post.find(req.body);
        console.log(posteos);
        //verificar si existen
         if(!posteos){
            return res.status(400).json({ msg: 'No se encontraron el Post'})
        }

        //Eliminar
        await Post.removeAllListeners({posteos});

        res.status(200).json({msg: 'Posteos eliminado'}); 

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error de DELETE en el servidor')
    }
}*/