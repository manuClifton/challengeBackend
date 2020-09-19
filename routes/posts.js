const express = require('express');
const router = express.Router();
const postController = require('../controller/postConstroller');
const { check } = require('express-validator');

// api/posts
//Obtener todos los post de un usuario
router.get('/',
    postController.obtenerPosts
);

//Crea un post
router.post('/', 
    [
        check('titulo', 'El titulo del post es obligatorio').not().isEmpty(),
        check('contenido', 'El contenido del post es obligatorio').not().isNumeric(),
        check('imagen', "Imagen obligatoria").not().isEmpty(),
        check('id_categoria', "categoria obligatoria").not().isEmpty()
    ],
    postController.crearPost
);
//Obtener por ID
router.get('/:id',
    postController.obtenerPorId
);


//Actualizar post via ID
router.put('/:id',
    postController.actualizarPost
);

//Eliminar un proyecto
router.delete('/:id',
    postController.eliminarPost
); 

/*
//Eliminar todos los proyectos
router.delete('/',
    postController.eliminarPosteos
);*/


module.exports = router;