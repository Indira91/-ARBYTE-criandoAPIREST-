const express = require('express');
const routes = require("./src/routes")
const app = express();
const port = process.env.PORT || 6500;

app.use(routes);


app.listen(port, err => {
    if(err) return console.log(`nao startou $ {err}`);
    console.log('roda na porta ', port)
}) 