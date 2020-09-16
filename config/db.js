const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('yIqnDOgEHZ', 'yIqnDOgEHZ', 'ZYdogI8vaX', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

module.exports = sequelize;