const express = require('express');
const routes = require("./src/routes");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 6500;
const cors = require ("cors")

app.use(bodyParser.urlencoded({ extended: false})); //so dados simples
app.use(bodyParser.json()); //aceita so formato json de entrada
app.use(morgan('dev'));
app.use(cors());

app.use(routes);



app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        error: {
           message: error.message
        }
    });
});

app.listen(port, err => {
    if(err) return console.log(`nao startou $ {err}`);
    console.log('roda na porta ', port)
}) 