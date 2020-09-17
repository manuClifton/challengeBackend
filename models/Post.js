const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

class Post extends Model{}
Post.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        require: true,
        trim: true
    },
    contenido: {
        type: DataTypes.STRING,
        require: true,
    },
    imagen:{
        type: DataTypes.STRING
    },
    categoria:{
        type: DataTypes.STRING,
        require: true,
        trim: true
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    }
},
{
    sequelize,
    modelName: "Post"
});

module.exports = Post;