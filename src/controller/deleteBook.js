const Book = require('../models/book');

async function tryToDeleteBook (req, res) {

   if (!req.body) {
      return res.status(400).send({ error: 'Cannot find body into the request' });
   }

   const { userIdParam, titleParam } = req.body;

   if (!userIdParam || !titleParam) {
      return res.status(400).send({ error: 'Any non user_id and title provided' });
   }

   try {

      const queryResult = await Book.deleteOne({ user_id: userIdParam, title: titleParam });

      if (!queryResult){
         return res.status(400).send({ error: 'Nenhum livro encontrado' });
      }

      return res.status(200).send({ success: queryResult });
      
   } catch (err) {
      return res.status(400).send({ error: 'There are some problem when trying to talk to bd: ' + err });
   }
};

module.exports = tryToDeleteBook;