const express = require('express');
const rotas_categoria = require('./routes/rotas_categoria');
const app = express();
app.listen(4000, ()=>{
    console.log('Servidor ta on na porta 4000 - http://localhost:4000');
});