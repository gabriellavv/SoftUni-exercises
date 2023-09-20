const phonebookController = require('./controllers/phonebook-controller');

module.exports = (app) => {
  app.get('/', phonebookController.index);   // при GET заявка (localhost:3000), да вземе index метода от phonebookController и да го изпълни
  app.post('/add', phonebookController.addPhonebookPost); // POST заявката се посреща от тези
}