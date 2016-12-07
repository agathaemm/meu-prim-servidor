//importa o modulo express
var express = require('express');

//cria um aplicativo
app = express();

//estabele uma rota
app.get('/', function(req, res) {
    res.send("<h1>Hello world</h1>");
});

//tentando vincular o servidor a uma porta
var server = app.listen(8080);
console.log('Servidor express iniciado');