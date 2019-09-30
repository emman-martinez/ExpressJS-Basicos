/* ***** Servidor con ExpressJS ***** */

const express = require('express');
const app = express();

app.use(express.json());

app.all('/user', (req, res, next) => {
    console.log('Por aquí paso');
    //res.send('Finish...');
    next();
});

// Routing

// get
app.get('/', (req, res) => {
    res.send('GET REQUEST RECEIVED');
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

// listen
app.listen(5000, () => {
    console.log('Server on port 5000');
});

/* ***** Servidor con NodeJs ***** */

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World with ExpressJS');
// });

// server.listen(3000, () => {
//     console.log('Server on port 3000');
// });