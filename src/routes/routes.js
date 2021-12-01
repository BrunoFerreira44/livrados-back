const express = require('express');
const routes = express.Router();

const authMiddleware = require('../middleware/auth');

const loginController = require('../controller/loginController');
const userRegistrationController = require('../controller/userRegistrationController');
const bookRegistrationController = require('../controller/bookRegistrationController');
const searchBookByTitleController = require('../controller/searchBookByTitle');
const searchBookByCategoryController = require('../controller/searchBookByCategory');
const searchUserByIdController = require('../controller/searchUserById');
const searchAllBooksController = require('../controller/searchAllBooks');
const searchBookByUserController = require('../controller/searchBookByUser');
const deleteBookController = require('../controller/deleteBook');


routes.post('/login', loginController);
routes.post('/user-registration', userRegistrationController);
routes.post('/book-registration', bookRegistrationController);

routes.post('/searchBookByTitle', searchBookByTitleController);
routes.post('/searchBookByCategory', searchBookByCategoryController);
routes.post('/searchUserById', searchUserByIdController);
routes.post('/searchBookByUser', searchBookByUserController);
routes.get('/searchAllBooks', searchAllBooksController);

routes.post('/deleteBook', deleteBookController);

routes.get('/auth', authMiddleware.authUser);

module.exports = routes;