

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

}