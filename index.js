const express = require('express');
const path = require('path');
const safawakt = require('./safawakt');

const app = express();
const port = 4000;

app.use(safawakt);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render("home", { title: "Home" });
});

app.get('/services', function(req, res){
    res.render("services", { title: "services" });
});

app.get('/contact', function(req, res){
    res.render("contact", { title: "contact" });
});

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});