const routes = require('express').Router();
const transactionController = require('./app/controllers/transactionController');

//Rotas para transações
routes.post('/transaction', transactionController.store);
routes.get('/transaction', transactionController.index);

module.exports = routes;
