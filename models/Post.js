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
        trim: true,
        validate:{
            len:[2,15]
        }
    },
    contenido: {
        type: DataTypes.STRING,
        require: true,
        validate:{
            len:[1,100]
        }
    },
    imagen:{
        type: DataTypes.STRING,
        require: true,
        validate:{
            isUrl: true
        }
    },
    id_categoria:{
        type: DataTypes.INTEGER,
        notNull: true
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true  
});

module.exports = Post;