const User = require('../models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const SECRET = require('../config/authSecret.json');

async function tryToLogin (req, res) {

   if (!req.body) {
      return res.status(400).send({ error: 'Cannot find body into the request' });
   }

   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(400).send({ error: 'Email ou senha não informado' });
   }

   try {
      const hashPassword = crypto.createHash('md5').update(password).digest('hex');

      let user = await User.findOne({ email }).select('+password');
   
      if (!user) {
         return res.status(400).send({ error: 'Usuário não encontrado' });
      }

      if (hashPassword !== user.password) {
         return res.status(400).send({ error: 'Email ou senha incorretos' });
      }

      //GERAÇÃO DO TOKEN
      const token = jwt.sign({ id: user.id }, SECRET.key, {
         expiresIn: 48600,
      });
   
      user.password = undefined;

      return res.status(200).send({ success: 'Seja bem-vindo ' + user.name + '!', user, token });   
   } catch (err) {
      return res.status(400).send({ error: 'There are some problem when trying to talk to bd: ' + err });
   }

};

module.exports = tryToLogin;