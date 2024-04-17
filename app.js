const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS' });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
