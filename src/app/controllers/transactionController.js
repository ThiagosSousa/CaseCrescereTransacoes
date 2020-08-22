const transactionModel = require('../models/transaction');

class transactionController {
  // post - Criar Transação
  async store(req, res) {
    const transaction = await transactionModel.create(req.body);
    return res.status(201).json({ transaction });
  }
  // GET - Listar todas as transações
  async index(req, res) {
    const transactions = await transactionModel.find();
    return res.json(transactions);
  }
}

module.exports = new transactionController();
