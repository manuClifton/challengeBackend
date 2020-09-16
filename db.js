const Sequelize = require('sequelize');

const PostModel = require('./models/Post');

const sequelize = new Sequelize('yIqnDOgEHZ', 'yIqnDOgEHZ', 'ZYdogI8vaX', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

const Post = PostModel(sequelize, Sequelize);

sequelize.sync( {force: false} )
    .then( ()=>{
        console.log("Tablas SINCRONIZADAS");
    } )

module.exports = {
    Post
}