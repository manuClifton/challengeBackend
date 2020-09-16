const express = require('express');
const router = express.Router();
const {Post} = require('../../models/Post');
const postController = require('../../controller/postConstroller');

const { check } = require('express-validator');



router.get('/',
    //const posts = Post.findAll();
    postController.obtenerPosts
    //res.send('entra correctamente. FUNCIONA');
);

module.exports = router;