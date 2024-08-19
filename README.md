# Documentação do Backend

## Índice

1. [Instalação](#instalação)
2. [Configuração do Prisma](#configuração-do-prisma)
3. [Variáveis de Ambiente](#variáveis-de-ambiente)
4. [Autenticação](#autenticação)
5. [Rotas de Produtos](#rotas-de-produtos)
   - [Criar Produto](#criar-produto)
   - [Editar Produto](#editar-produto)
   - [Deletar Produto](#deletar-produto)
   - [Buscar Produtos](#buscar-produtos)

## Instalação

Para iniciar o backend, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Entre no diretório do projeto:

   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione a variável `JWT_SECRET`:
   ```bash
   JWT_SECRET=seu_segredo_jwt
   ```

## Configuração do Prisma

O backend utiliza Prisma como ORM para interagir com o banco de dados. Siga os passos abaixo para configurar o Prisma e rodar as migrations:

1. **Gerar as migrations:**

   Após configurar o banco de dados, rode o comando abaixo para gerar as migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

   Esse comando criará as tabelas necessárias no banco de dados conforme o esquema definido no arquivo `prisma/schema.prisma`.

2. **Rodar as migrations:**

   Para aplicar as migrations e preparar o banco de dados, rode o comando:

   ```bash
   npx prisma migrate deploy
   ```

3. **Verificar a instalação do Prisma:**

   Você pode verificar o estado do banco de dados e a estrutura das tabelas usando o Prisma Studio:

   ```bash
   npx prisma studio
   ```

   Isso abrirá uma interface gráfica no navegador onde você pode explorar o banco de dados.

## Variáveis de Ambiente

Este backend utiliza apenas uma variável de ambiente:

- `JWT_SECRET`: Esta variável armazena o segredo usado para assinar o token JWT. voce pode acessar :

  ```
  https://www.md5hashgenerator.com/
  ```

## Autenticação

O backend possui um sistema básico de autenticação com JWT. As seguintes rotas estão disponíveis:

- **Criar Usuário:**

  ```http
  POST /api/auth/register
  ```

  - **Body:** `{ "name": "seu_usuario", "password": "sua_senha", "email":"seu_email" }`
  - **Resposta:** `{ "message": "Usuário criado com sucesso." }`

- **Login:**
  ```http
  POST /api/auth/login
  ```
  - **Body:** `{ "email": "seu_email", "password": "sua_senha" }`
  - **Resposta:** `{ "token": "jwt_token" }`

## Rotas de Produtos

As rotas de produtos permitem criar, editar, deletar e buscar produtos. As rotas de criação, edição e deleção são autenticadas, exigindo um token JWT válido. A rota de busca é aberta ao público.

### Criar Produto

- **Rota Autenticada**
- **Método:** `POST`
- **Endpoint:** `/api/products`
- **Body:** `{ "name": "nome_produto", "price": "preco_produto", "description": "descricao_produto" }`
- **Headers:** `Authorization: Bearer {token}`
- **Resposta:** `{ "message": "Produto criado com sucesso." }`

### Editar Produto

- **Rota Autenticada**
- **Método:** `PUT`
- **Endpoint:** `/api/products/:id`
- **Body:** `{ "name": "novo_nome", "price": "novo_preco", "description": "nova_descricao" }`
- **Headers:** `Authorization: Bearer {token}`
- **Resposta:** `{ "message": "Produto atualizado com sucesso." }`

### Deletar Produto

- **Rota Autenticada**
- **Método:** `DELETE`
- **Endpoint:** `/api/products/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Resposta:** `{ "message": "Produto deletado com sucesso." }`

### Buscar Produtos

- **Rota Aberta**
- **Método:** `GET`
- **Endpoint:** `/api/products`
- **Resposta:** `[{ "id": 1, "name": "nome_produto", "price": "preco_produto", "description": "descricao_produto" }, ...]`

---

Essa documentação fornece uma visão geral rápida de como configurar e interagir com o backend. Para detalhes adicionais ou customizações, é recomendável revisar o código fonte do projeto.
