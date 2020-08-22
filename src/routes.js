const routes = require('express').Router();
const multer = require('multer');
const userController = require('./app/controllers/usercontroller');
const chocolateController = require('./app/controllers/chocolatecontroller');
const validatorMid = require('./app/middlewares/validators');
//const jwtMid = require('./app/middlewares/jwt');
const multerConfig = require('./config/multer');

// Rotas para Usuários
routes.post('/users', validatorMid.userCreateValidator, userController.store);
routes.post('/login', userController.auth);
//routes.use(jwtMid);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.delete('/users/:id', userController.destroy);
routes.put(
  '/users/:id',
  validatorMid.userUpdateValidator,
  userController.update
);

// Rotas para chocolate
routes.post(
  '/',
  multer(multerConfig).single('file'),
  chocolateController.store
);
routes.get('/', chocolateController.index);
routes.get('/:id', chocolateController.show);
routes.put('/:id', chocolateController.update);
routes.delete('/:id', chocolateController.destroy);

module.exports = routes;
