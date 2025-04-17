# 📸 API Upload de Imagens

Uma API simples para upload e exibição de imagens, utilizando Node.js, Express e Multer. Ideal para projetos que precisam armazenar imagens localmente com um sistema de gerenciamento básico.

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Multer
- JavaScript
- HTML5 / CSS3

## 📁 Estrutura do projeto

```
API-Upload-Img-main/
├── app.js                   # Arquivo principal da aplicação
├── db.js                    # Conexão com o banco (simulado ou real)
├── index.html               # Página web para upload e visualização
├── script.js                # Script JS do front-end
├── styles.css               # Estilos da interface
├── package.json             # Dependências do projeto
├── uploads/                 # Diretório onde as imagens são salvas
├── config/
│   └── multer.js            # Configuração do Multer
├── controllers/
│   └── PictureController.js # Lógica de upload e listagem de imagens
├── models/
│   └── Picture.js           # Modelo de imagem
└── routes/
    └── picture.js           # Rotas da API
```

## 🔧 Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone [URL-do-repositório]
   cd API-Upload-Img-main
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   node app.js
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📦 Funcionalidades

- Upload de imagens através de formulário HTML
- Salvamento local dos arquivos
- Visualização das imagens já enviadas
- API modularizada com uso de controllers, rotas e modelos

## 📌 Requisitos

- Node.js instalado
- Navegador moderno para testar a interface

## 👥 Créditos

Desenvolvido por [Seu Nome ou Equipe].

## 📄 Licença

Este projeto é de livre uso para fins educacionais e testes.
