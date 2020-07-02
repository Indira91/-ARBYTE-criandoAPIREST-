console.log('nossa mano')

const express = require('express')
const app = express();
const port = process.env.PORT || 6500;

app.get('', (req, res) => {
    res.json({
        message: "deu uma boa",
        
    });
});

app.listen(port, err => {
    if(err) return console.log(`nao startou $ {err}`);
    console.log('roda na porta ', port)
}) 