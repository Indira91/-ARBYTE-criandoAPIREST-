const repository = require("../repositories/orders");

const getAll = () => repository.getAll();

const getById = async (id) => {
    const order = await repository.getById(id);
    if (!order) {
        throw {status: 404, message : "Not found"};
    }
    return order;
};

const create = async (order) => {
    const id = await repository.create(order);
    const created = await repository.getById(id);
   return created;
};

module.exports = {

    getAll,
    getById,
    create,
};