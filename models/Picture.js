// Importa para interagir com o DB
const mongoose = require("mongoose");

// Permite criar esquemas e modelos para o MongoDB
const Schema = mongoose.Schema;

// Definindo um Schema para as Imagens
const PictureSchema = new Schema({
  // Campo do tipo String e obrigatório
  name: { type: String, required: true },
  // Campo do tipo String e obrigatório
  src: { type: String, required: true },
});

// Criando o modelo 'Picture' a partir do esquema criado antes
// O modelo 'Picture' é usado para  interagir com a "Tabela" Picture no banco de dados
module.exports = mongoose.model("Picture", PictureSchema);
