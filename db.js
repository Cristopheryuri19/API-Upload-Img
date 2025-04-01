// Importa para interagir com o DB
const mongoose = require("mongoose");

// Carrega variáveis de ambiente do arquivo .ENV
require("dotenv").config();

// Configurando para permitir consultas (Restritas)
mongoose.set("strictQuery", true);

// Obtém as credenciais do MongoDB armazenadas no arquivo .env
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Função para mo DB
async function main() {
  await mongoose
    .connect
    // Link do Mongo
    (`mongodb+srv://${dbUser}:${dbPassword}@projeto-api.xywkl.mongodb.net/?retryWrites=true&w=majority&appName=Projeto-API`);
  // Exibe ao usuario que realizou a conexão
  console.log("Conectou ao banco de dados!");
}
// Exibe a msg ao úsuario com erro
main().catch((err) => console.log(err));

// Exporta a função para utilizar em outro arquivo
module.exports = main;
