const Book = require('../models/book');

async function tryToSearchAllBooks(req, res) {

   try {

      const queryResult = await Book.find();

      if (!queryResult) {
         return res.status(400).send({ error: 'Nenhum livro encontrado' });
      }

      return res.status(200).send({ books: queryResult });

   } catch (err) {
      return res.status(400).send({ error: 'There are some problem when trying to talk to bd: ' + err });
   }
};

module.exports = tryToSearchAllBooks;