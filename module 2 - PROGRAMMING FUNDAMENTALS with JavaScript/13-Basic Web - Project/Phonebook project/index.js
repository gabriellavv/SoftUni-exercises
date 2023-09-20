const express = require('express');               // framework, който позволява да работим с Model View Controller pattern
const path = require('path');                     // помощна библиотека, която помага да работим с пътища
const handlebars = require('express-handlebars'); // view template
const bodyParser = require('body-parser');        //чете данните, които идват от клиента към сървъра

const routing = require('./routing');   // Пътищата
const port = 3000;
const app = express();      // създаваме си нашия сървър

// настройки за handlebars и др
app.engine(".hbs", handlebars({  
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views')); // указваме че views-тата се намират в папката /views
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

routing(app);

app.listen(port, console.log("Listening on port " + port + "..."));