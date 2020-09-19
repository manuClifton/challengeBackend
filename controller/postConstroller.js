const Post = require('../models/Post');
const { validationResult } = require('express-validator');
const Categoria = require('../models/Categoria');


//Obtiene todos los posts
exports.obtenerPosts = async (req, res) =>{

    try {
        const posts = await Post.findAll({
            attributes: ["id", "titulo", "contenido", "imagen", "id_categoria", "fecha"],
            order: [['fecha', 'DESC']]
        })
        if(posts.length == 0){
            res.status(404).json({ msg: 'POSTEOS VACIOS'});
        }else{
            let posteos = []
           for (let i = 0; i < posts.length; i++) {
                let categoria = await Categoria.findOne({
                    where: {id: posts[i].id_categoria}
                })
               posteos.push({
                   id: posts[i].id,
                   titulo: posts[i].titulo,
                   contenido: posts[i].contenido,
                   imagen: posts[i].imagen,
                   categoria: categoria.nombre,
                   fecha: posts[i].fecha
               })
           }
            res.json(posteos);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Hubo un error en el get de Posteos'});
    }
}

//Obtiene por ID
exports.obtenerPorId = async (req, res) =>{

    try {
        const post = await Post.findOne({
            where: {id: req.params.id},
            attributes: ["id", "titulo", "contenido", "imagen", "id_categoria", "fecha"]
        });
        if(post == null){
            res.status(404).json({ msg: 'No hay post con ese ID'});
        }else{
            let categoria = await Categoria.findOne({
                where: {id: post.id_categoria}
            })
            let posteo = {
                id: post.id,
                titulo: post.titulo,
               contenido: post.console,
               imagen: post.imagen,
               categoria: categoria.nombre,
               fecha: post.fecha
            }
            res.json(posteo);
        }
        
    } catch (error) {
        res.status(400).json({ msg: 'ERROR EN LA PETICION'});
    }
}

//Crear posteo nuevo
exports.crearPost = async (req, res) => {
    //revisar si hay errores
    const errors = validationResult(req);

    if(!errors.isEmpty()){ // si hay errores los muestro
        console.log('Hay un error en el postman');
        return res.status(400).json({ errors: errors.array() })
    }
    
    try {
        //crea el posteo
        const { titulo, contenido, imagen, idCategoria } = req.body;
        
        let post = await Post.create(req.body);

        //Mensaje
        if(post == null){
            res.status(404).json({ msg: 'ERROR POSTEO NUEVO'});
        }else{
            let categoria = await Categoria.findOne({
                where: {id: post.id_categoria}
            })
            let posteo = {
                id: post.id,
                titulo: post.titulo,
               contenido: post.contenido,
               imagen: post.imagen,
               categoria: categoria.nombre,
               fecha: post.fecha
            }
            res.status(200).json(posteo);
        }
        
    } catch (error) {
        res.status(400).json(error);
    }
}

//Actualizar un post
exports.actualizarPost = async (req, res) =>{
    try {
            let posteo = await Post.update(req.body, {
                where: { id: req.params.id}
            });

            if(posteo.length == 0 || posteo == 0 || posteo == null){
                return res.status(404).json({ msg: 'No se econtro el Post'})
            }else{
                res.status(200).json({ msg: 'Se actualizo correctamente'});
            }
    } catch (error) {
        res.status(400).send('Hubo un error PUT en el servidor')
    }
}

//Elimina un posteo por su ID
exports.eliminarPost = async (req,res) =>{
    try {
      const post = await Post.destroy({
            where: { id: req.params.id}
        })
        if(post == 0){
            res.status(404).json({ msg: 'No hay post con ese ID'});
        }else{
            res.status(200).json({ msg: 'Se elimino el posteo'});
        }
        
    } catch (error) {
        res.status(400).send('Hubo un error de DELETE en el servidor')
    }

}
