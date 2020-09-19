const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoriaController');
const { check } = require('express-validator');

// api/posts
//Obtener todos los post de un usuario
router.get('/',
    categoriaController.obtenerCategorias
);

//Crea un post
router.post('/', 
    categoriaController.crearCategoria
);
//Obtener por ID
router.get('/:id',

);


//Actualizar post via ID
router.put('/:id',
  
);

//Eliminar un proyecto
router.delete('/:id',
 
); 

module.exports = router;