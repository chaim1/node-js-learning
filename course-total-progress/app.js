const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'pug')
app.set('views', 'views')
const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.render('404', {docTitle: "Page not found"})
});
app.listen(3000);