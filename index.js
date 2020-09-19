const express = require('express');
const {sequelize, conectarDB} = require('./config/db');
const apiRouter = require('./routes/posts');
const apiRoute = require('./routes/categoria');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//puerto de la APP
const port = process.env.PORT || 4000;



//importo las rutas
app.use('/api/posts', apiRouter);
app.use('/api/categorias', apiRoute);


app.listen(port, ()=>{
    console.log(`El servidor funciona en el puerto ${port}`);
    conectarDB();
    
})