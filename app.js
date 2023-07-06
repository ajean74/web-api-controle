const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs'); // Utilisation du moteur de template EJS
app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Serveur Express en écoute sur le port 3000');
});
