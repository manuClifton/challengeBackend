const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const apiRouter = require('./routes/posts');

const app = express();

//require('./db');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded( {extended: true} ));

//puerto de la APP
const port = process.env.PORT || 4000;

//app.use('/api', apiRouter);
//importo las rutas
app.use('/api/posts', apiRouter);

app.listen(port, ()=>{
    console.log(`El servidor funciona en el puerto ${port}`);

    //Conectarse a la base de datos
    sequelize.sync({ force:false })
    .then(()=>{
        console.log("DB Conectada");
    })
    .catch( error =>{
        console.log("ERROR al conectarse a DB",error );
    })
})