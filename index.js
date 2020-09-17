const express = require('express');
const {sequelize, conectarDB} = require('./config/db');
const apiRouter = require('./routes/posts');


const app = express();
app.use(express.json());
//puerto de la APP
const port = process.env.PORT || 4000;


conectarDB();
//importo las rutas
app.use('/api/posts', apiRouter);


app.listen(port, ()=>{
    console.log(`El servidor funciona en el puerto ${port}`);

    
})