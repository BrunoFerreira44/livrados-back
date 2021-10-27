const Book = require('../models/book');

async function tryToSearchBookByTitle (req, res) {

   if (!req.body) {
      return res.status(400).send({ error: 'Cannot find body into the request' });
   }

   const { searchFor } = req.body;

   if (!searchFor) {
      return res.status(400).send({ error: 'Any non category provided' });
   }

   try {

      const queryResult = await Book.find({ category: RegExp('^' + searchFor + '$', 'i') });

      if (!queryResult){
         return res.status(400).send({ error: 'Nenhum livro encontrado' });
      }

      return res.status(200).send({ books: queryResult });
      
   } catch (err) {
      return res.status(400).send({ error: 'There are some problem when trying to talk to bd: ' + err });
   }
};

module.exports = tryToSearchBookByTitle;