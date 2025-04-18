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

3. Crie um arquivo .env
    ```
    Crie o arquivo .env na pasta raiz com:
    DB_USER:<seu usuário do cluster do mongodb>
    DB_PASS:<sua senha do cluster do mongodb>
    PORT:4000
    
4. Copiar seu link de conexão do cluster do mongodb
    ```bash
    Explo: `mongodb+srv://${dbUser}:${dbPassword}@projeto-api.xywkl.mongodb.net/?retryWrites=true&w=majority&appName=Projeto-API`
    ```
   
5. Colar o link na linha 19 do arquivo db.js
    OBS: colocar o link dentro das crases( ` )
 
6. Execute o servidor:
    ```bash
    npm start
    ```

6. Acesse no navegador:
    ```
    http://localhost:4000
    ```

## 📦 Funcionalidades

- Upload de imagens através de formulário HTML
- Salvamento no banco de dados(mongodb) e na pasta uploads(temporariamente)
- Visualização das imagens já enviadas
- API modularizada com uso de controllers, rotas e modelos

## 📌 Requisitos

- Node.js instalado
- Navegador moderno para testar a interface

## 👥 Créditos

Desenvolvido por Cristopher.

## 📄 Licença

Este projeto é de livre uso para fins educacionais e testes.
