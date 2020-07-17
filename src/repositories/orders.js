const knex = require("../../database");
const moment = require("moment");

const tableName = "orders";

//SELECT * FROM orders

const getAll = () => knex(tableName);

const getById = (id) => {
    return knex(tableName)
         .where({id: id})
         .then(([order]) => order);
 };

//SELECT * FROM orders (id, quantity, price) VALUES (?, ?, ?)

const create = (order) => {
   return knex(tableName)
   .insert(order)
   .then(([inserted]) => inserted);

};

module.exports = {
    getAll,
    create,
    getById,
};