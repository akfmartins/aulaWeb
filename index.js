const { response } = require('express');
const express = require('express');

const app = express();
const usuarios = [];
const usuario = {
    nome = "Ana";
    sobrenome = "Martins"
}
usuarios.push(usuario):

app.get('/usuarios',(request, response)=>{
    response.json({usuarios: []})
});
app.get('/produtos',(request, response)=>{
    response.json({produtos})
    
});

app.listen(3000, ()=>{
    console.log("Servidor Iniciado")
});