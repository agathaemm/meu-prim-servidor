//importa o modulo express
var express = require('express');

//cria um aplicativo
app = express();

//estabele uma rota
app.get('/', function(req, res) {
    res.send("<img src='img/ok.jpg'>");
});

//tentando vincular o servidor a uma porta
var server = app.listen(8080, function(){
    console.log('Servidor express iniciado');
});
