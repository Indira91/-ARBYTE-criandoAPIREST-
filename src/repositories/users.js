const knex = require('../../database');
const User = require('../models/User');

const tableName = "users";

//INSERT INTO users (name, email, password, created_at, updated_at) values (?,?,?,?)

const create = async user => {
    const [id] = await knex(tableName).insert(user);
    return id;
};

const getOne = async (params) => {
    const [user] = await knex(tableName).where(params);
    return new User(user);
};


module.exports = {
    create,
    getOne,
};