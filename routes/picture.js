// Importa o módulo express para configurar as Rotas
const express = require("express");

// Cria a instãcia do roteador do express para definir ROTAS
const router = express.Router();

// Importa a configuração do Multer oara ligar com upload de arquivos
const upload = require("../config/multer");

// Importa o controlador da imagem, onde tem rodas as funções e busca
const PictureController = require("../controllers/PictureController");

// Definindo a rota POST para criar, e fazer upload da imagem
router.post("/", upload.single("file"), PictureController.create);

// Definindo a rota GET para buscar todas as imagens do DB
router.get("/", PictureController.findAll);

// Definindo a Rota DELETE para apagar imagens
router.delete(":id", PictureController.remove);

// Exportando o arquivo para utilizar no app.js
module.exports = router;
