/* eslint-disable new-cap */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

class userController {
  // post - Criar Usuário
  async store(req, res) {
    const user = await userModel.create(req.body);

    user.pass = undefined;

    return res.status(201).json({ user });
  }

  // Delete - Deletar Usuário
  async destroy(req, res) {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    return res.status(200).json({ msg: 'Usuário deletado com sucesso.' });
  }

  // PUT - Atualizar Usuário
  async update(req, res) {
    const { id } = req.params;

    delete req.body.pass;

    const user = await userModel.findOneAndUpdate(id, req.body, {
      new: true,
    });
    user.pass = undefined;
    return res.json({ user });
  }

  // GET com ID - Listar um Usuário
  async show(req, res) {
    const { id } = req.params;
    const user = await userModel.findById(id);
    return res.json(user);
  }

  // GET - Listar todos Usuários
  async index(req, res) {
    const users = await userModel.find();
    users.pass = undefined;
    return res.json(users);
  }

  async auth(req, res) {
    const { email, pass } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Credenciais Inválidas!' });

    if (!(await bcrypt.compare(pass, user.pass))) {
      return res.status(401).json({ msg: 'Credenciais Inválidas!' });
    }

    const { _id: id } = user;

    const token = jwt.sign({ id }, process.env.JWT_KEY, {
      expiresIn: '1d',
    });

    return res.json({ token });
  }
}

module.exports = new userController();
