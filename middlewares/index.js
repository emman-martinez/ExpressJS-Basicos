/* ***** Servidor con ExpressJS ***** */

const express = require('express');
// Con módulos Express: Morgan
const morgan = require('morgan');
const app = express();

// Settings
app.set('appName', 'Program@rte Express Tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middlewares: Manejador de petición que podemos ejecutar antes de que lleguen a su ruta original
// Función para cualquier uso
// Con NodeJS
// const logger = (req, res, next) => {
//     const route = `Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`;
//     console.log(route);
//     next();
// };

app.use(express.json());
app.use(morgan('dev'));
// app.use(logger); // Con NodeJS

// app.all('/user', (req, res, next) => {
//     console.log('Por aquí paso');
//     //res.send('Finish...');
//     next();
// });

// Routes

// get

// app.get('/', (req, res) => {
//     res.send('GET REQUEST RECEIVED');
// });

app.get('/', (req, res) => {
    const data = [{ name: 'john' }, { name: 'joe' }, { name: 'cameron' }, { name: 'ryan' }];
    res.render('index.ejs', { people: data });
});

app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    });
});

// post
app.post('/about', (req, res) => {
    res.send('POST REQUEST RECEIVED');
});

app.post('/user', (req, res) => {
    console.log(req.body); // Cuerpo de la petición 
    res.send('POST REQUEST RECEIVED');
});

app.post('/user/:id', (req, res) => {
    console.log(req.body); // Cuerpo de la petición 
    console.log(req.params); // Parámetros de la petición 
    res.send('POST REQUEST RECEIVED');
});

// put
app.put('/contact', (req, res) => {
    res.send('UPDATE REQUEST RECEIVED');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body); // Cuerpo de la petición
    // console.log(req.params); // Parámetros de la petición 
    res.send(`User ${req.params.id} updated`);
});

// delete
app.delete('/test', (req, res) => {
    res.send('<h1>DELETE REQUEST RECEIVED</h1>');
});

app.delete('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

// Middleware para StaticFiles
app.use(express.static('public'));

// listen
app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
});