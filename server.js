const express = require('express');
const app = express(); //moved express() above exphbs;
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;
const home = require('./routes/home'); //misspelled routes with router;
const about = require('./routes/about'); //misspelled routes with router;
const contact = require('./routes/contact'); //misspelled routes with router;

app.use(express.static('public'));
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

// app.get('/', (req, res) => {  //don't need this code anymore
//   res.send('smoke test');
// });

app.use('/', home); //'added '/'
app.use('/', about); //'added '/'
app.use('/', contact); //'added '/'

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
