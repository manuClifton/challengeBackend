const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

class Categoria extends Model{}
Categoria.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        notNull: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        notNull: true,
        require: true,
        trim: true,
        validate:{
            len:[2,15]
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true  
});

module.exports = Categoria;