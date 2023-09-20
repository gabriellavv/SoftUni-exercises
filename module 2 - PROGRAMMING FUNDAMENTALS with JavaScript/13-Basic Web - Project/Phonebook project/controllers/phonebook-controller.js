const phonebook = require('../phonebook');              // това е model-а от който взимаме данните
const Contact = require("../models/Contact")            // двете точки връщат една директория назад, и оттам навигираме до нужния файл

module.exports = {

  index: (req, res) => { // буквално това е отговора на заявката /localhost:3000/
    // взимаме контактите от указателя от файла phonebook чрез функцията, която създадохме и позволихме за експортване там
    const contacts = phonebook.getContacts();

 // тук подаваме данните на view-то:
 // да търси файла "index" в папка views, защото така е настроено във файла с настройките на сървъра(index.js)
 // и да вкара в place holder-ите данните от contacts и да визуализира след това
    res.render('index', { contacts }); 
  },


  addPhonebookPost: (req, res) => {
    //Get input from client: 
    let name = req.body.name;
    let number = req.body.number;

    //Create model:
    const contact = new Contact(name, number);

    //Check if contact exists:
    if (phonebook.hasContact(contact)) {
     return res.render('404');
    }

    //Push model to 'database':
    phonebook.addContact(contact);

    //Redirect to home page:
    res.redirect('/');
  }
}