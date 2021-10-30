const express = require('express');
const routes = express.Router();

const authMiddleware = require('../middleware/auth');

const loginController = require('../controller/loginController');
const userRegistrationController = require('../controller/userRegistrationController');
const bookRegistrationController = require('../controller/bookRegistrationController');
const searchBookByTitleController = require('../controller/searchBookByTitle');
const searchBookByCategoryController = require('../controller/searchBookByCategory');
const searchUserByIdController = require('../controller/searchUserById');

routes.post('/login', loginController);
routes.post('/user-registration', userRegistrationController);
routes.post('/book-registration', authMiddleware.authUser, bookRegistrationController);

routes.post('/searchBookByTitle', searchBookByTitleController);
routes.post('/searchBookByCategory', searchBookByCategoryController);
routes.post('/searchUserById', searchUserByIdController);

routes.get('/auth', authMiddleware.authUser);

module.exports = routes;