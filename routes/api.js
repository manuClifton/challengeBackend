const express = require('express');
const router = express.Router();

const apiPostsRouter = require('./api/posts');

router.use('/posts', apiPostsRouter);

module.exports = router;