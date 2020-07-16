const { Router } = require('express');
const router = new Router();
const routeName = '/orders';

//Lista todos os pedidos.
router.get(routeName, (req, res) => {
    res.json([{
        message: 'Retorna todos os pedidos'
    }]);
});

//Pega os dados de um pedido.
router.get(`${routeName}/:id`, (req, res) => {
    res.json([{
        message: 'Retorna os dados de um pedido dado um id',
        id: req.params.id,
    }]);
});

//Cria um pedido.
router.post(routeName, (req, res) => {

    const orders = {
        id_products: req.body.id_products,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Cria um pedido',
        createdOrder: orders

    })
})

//Edita os dados de um pedido.
router.patch(`${routeName}/:id`, (req, res) => {
    res.json({
        message: "Vai editar os dados de um pedido dado um id",
        id: req.params.id,
    });
});

//Deleta um pedido.
router.delete(`${routeName}/:id`, (req, res) => res.status(204).end()); 

module.exports = router;