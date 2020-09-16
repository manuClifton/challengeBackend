const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

const port = process.env.PORT || 4000;

app.use('/api', apiRouter);

app.listen(port, ()=>{
    console.log(`El servidor funciona en el puerto ${port}`);
})