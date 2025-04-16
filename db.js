// Importa para interagir com o DB
const mongoose = require("mongoose");

// Carrega variaveis de ambiente do arquivo .env
require("dotenv").config();

// Configurando para permitir consultas (restritas)
mongoose.set("strictQuery", true);

// obtem as crendencias do Mongodb armazenada no .env
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Função para no DB
async function main() {
    await mongoose
        .connect
        // link do mongo
        (`mongodb+srv://${dbUser}:${dbPassword}@projeto-api.xywkl.mongodb.net/?retryWrites=true&w=majority&appName=Projeto-API`);
        
    // Exibe ao usuario que realizou a conexão 
    console.log("Conectou ao banco de dados!");
}
// Exibe a msg ao usuario com erro 
main().catch((err) => console.log(err));

// Exporta a função para utilizar em outro arquivo
module.exports = main;
