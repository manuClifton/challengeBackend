const Post = require('../models/Post');
const { validationResult } = require('express-validator');


//Obtiene todos los posts
exports.obtenerPosts = async (req, res) =>{

    try {
        const posts = await Post.findAll({
            attributes: ['titulo', 'contenido', 'imagen', 'categoria', 'fecha']
        },{
           oder: ['fecha', 'DESC']
        })
        res.status(200).json({posts});

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
    //console.log(req.body);
    //console.log(req.query);

    if(!errors.isEmpty()){ // si hay errores los muestro
        console.log('Hay un error en el postman')
        return res.status(400).json({ errors: errors.array() })
    }
    
    try {
          //crea el posteo
          let posteo = await Post.create(req.body);
        const {id, titulo, contenido, imagen, categoria} = posteo;
        //Mensaje
        res.json({id, titulo, contenido, imagen, categoria});
        res.send(`POST FUNCIONA \n${req.body}`);
        res.status(200).send('Posteo creado');
        res.status(201).json(req.body);
        
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
        //res.status(400).json({ error: 'Bad Request, invalid or missing input' });
    }
}


//Obtiene por ID
exports.obtenerPorId = async (req, res) =>{

    Post.findByPk(req.params.id).then(post =>{
        res.json(post);
    })
    /* try {
        
        const post = Post.findByPk(req.params.id);
        console.log(post);
        res.status(200).json({post});

        res.status(200).json({post});
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error en el get por ID');
        res.send(' NO FUNCIONA');
    } */
}

//Actualizar un post
exports.actualizarPost = async (req, res) =>{
    const { titulo, contenido, imagen, categoria } = req.body;

    try {
            let posteo = await Post.update(req.body, {
                where: { id: req.params.id}
            });
            res.json({posteo});
            if(posteo){
                return res.status(404).json({ msg: 'No se econtro el Post'})
            }
    
            res.status(200).json({ msg: 'Se actualizo correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error PUT en el servidor')
    }
}

//Elimina un posteo por su ID
exports.eliminarPost = async (req,res) =>{

    try {
       await Post.destroy({
            where: { id: req.params.id}
        })
        res.status(200).json({ msg: 'Se elimino el posteo'});
    } catch (error) {
        res.status(400).send('Hubo un error de DELETE en el servidor')
    }

    /* //Obtener el proyecto
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
    } */
}
/*
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