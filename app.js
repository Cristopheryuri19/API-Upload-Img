// Importa o Express para criar o servidor  e chama as rotas
const express = require("express");

// Cria uma instãncia do Express
const app = express();

// Carrega as varieveis de ambiente do arquivo .ENV
require("dotenv").config();

// Estabelece a conexão com o banco de dados
require("./db");

// Define a porta do servidor, ou do .ENV ou 3000 por padrão
const port = process.env.PORT || 3000;

// Importa o roteador de imagens para gerenciar as rotas criadas
const pictureRouter = require("./routes/picture");

// Define que todas as rotas são "localhost:3000/pictures"
app.use("/pictures", pictureRouter);

// Inicia o servidor e exibe uma mensagem ao usuário
app.listen(port, () => {
  console.log(`O servidor executa na porta ${port}`);
});
