const Post = require('../models/Post');
const { validationResult } = require('express-validator');


//Obtiene todos los posts
exports.obtenerPosts = async (req, res) =>{

    try {
        const posts = Post.findAll();
        res.send('FUNCIONA');

        res.status(200).json({posts});
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error en el get');
        res.send(' NO FUNCIONA');
    }
}

//Crear posteo nuevo
exports.crearPost = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);
    console.log(req.body);
    console.log(req.query);

    if(!errors.isEmpty()){ // si hay errores los muestro
        console.log('Hay un error en el postman')
        return res.status(400).json({ errors: errors.array() })
    }
    
    try {
          //crea el posteo
          let posteo = await Post.create(req.body);

        //Mensaje
        res.send(`POST FUNCIONA \n${req.body}`);
        res.status(200).send('Posteo creado');
        res.status(201).json(req.body);
        
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
        //res.status(400).json({ error: 'Bad Request, invalid or missing input' });
    }
}
/*
//Actualizar un post
exports.actualizarPost = async (req, res) =>{

      //const resultado = await db.posts.findOne({
        //where: {
       // id: id
       // }
       // })

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