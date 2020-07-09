const { Router} = require("express");
const orders = require("./orders");
const products = require("./products");

const router = new Router();

router.use(orders);
router.use(products);


//quando não encontra uma rota, passa por aqui.
router.use((req, res, next) => {
    const erro = new Error('não foi encontrado');
    erro.status = 404;
    next(erro);
});


module.exports = router;