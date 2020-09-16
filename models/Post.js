const {Model, DataTypes} = require('sequelize');
const sequelize = require('sequelize');

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
    modelName: "post"
})

module.exports = Post;
/*
module.exports = (sequelize, type) =>{

    return sequelize.define('post', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: type.STRING,
            require: true,
            trim: true
        },
        contenido: {
            type: type.STRING,
            require: true,
        },
        imagen:{
            type: type.STRING
        },
        categoria:{
            type: type.STRING,
            require: true,
            trim: true
        },
        fecha: {
            type: type.DATE,
            defaultValue: type.NOW 
        }
    })

}*/