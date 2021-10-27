const User = require('../models/user');

async function tryToSearchBookByTitle (req, res) {

   if (!req.body) {
      return res.status(400).send({ error: 'Cannot find body into the request' });
   }

   const { searchFor } = req.body;

   if (!searchFor) {
      return res.status(400).send({ error: 'Any non user provided' });
   }

   try {

      const queryResult = await User.findOne({ id: searchFor });

      if (!queryResult){
         return res.status(400).send({ error: 'Nenhum livro encontrado' });
      }

      return res.status(200).send({ user: queryResult });
      
   } catch (err) {
      return res.status(400).send({ error: 'There are some problem when trying to talk to bd: ' + err });
   }
};

module.exports = tryToSearchBookByTitle;