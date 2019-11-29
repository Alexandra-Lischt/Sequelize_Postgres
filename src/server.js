const express = require('express')
const routes = require('./routes')

require('./database'); // Conectar com o Banco de Dados

const app = express(); // iniciar o Express

app.use(express.json()); // -> framework Node.js para fazer requisição para o servidor Node em formato JSON.
app.use(routes); // -> nossa rota (endpoint) localhost:3000/users com os controllers(resolvers(graphQL) no NoSQL)

app.listen(3000)