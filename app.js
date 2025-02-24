const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const app = express();
const punkAPI = new PunkAPIWrapper();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// Register the location for handlebars partials here:
<<<<<<< HEAD

// Register the location for partials

hbs.registerPartials(path.join(__dirname, 'views/partials'));

=======
// Register the location for partials
hbs.registerPartials(path.join(__dirname, 'views/partials'));
>>>>>>> fd6a62b5b975a9a8ffbd117374b91e00683bfca0
// Add the route handlers here:
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then(beersFromApi => {
      res.render('beers', { beers: beersFromApi });
    })
    .catch(error => console.log(error));
});
app.get('/random-beer', (req, res) => {
  punkAPI
    .getRandom()
    .then(beersFromApi => {
      res.render('random-beer', { beers: beersFromApi });
    })
    .catch(error => console.log(error));
});
app.listen(3000, () => console.log(':coureur-à-pied:‍ on port 3000'));
