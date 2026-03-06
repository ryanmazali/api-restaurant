# Restaurant API

REST API para gerenciamento de restaurante desenvolvida com **Node.js**, **TypeScript**, **Express** e **SQLite**.

A aplicação permite gerenciar **produtos, mesas, sessões de mesa e pedidos**, simulando o fluxo real de atendimento em um restaurante.

Este projeto foi desenvolvido durante o curso da **Rocketseat** com foco em práticas modernas de desenvolvimento backend.

---

# Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* Knex.js
* SQLite
* Zod (validação de dados)

---

# Funcionalidades

A API possui os seguintes recursos:

### Produtos

* Criar produto
* Listar produtos

### Mesas

* Criar mesa
* Listar mesas

### Sessões de mesa

* Abrir sessão de mesa
* Encerrar sessão de mesa

### Pedidos

* Criar pedido
* Listar pedidos
* Remover pedido

---

# Estrutura do projeto

```id="k2ajg7"
src
 ├ controllers
 │   ├ orders-controller.ts
 │   ├ products-controller.ts
 │   ├ tables-controller.ts
 │   └ tables-sessions-controller.ts
 │
 ├ database
 │   ├ migrations
 │   ├ seeds
 │   ├ knex.ts
 │   └ database.db
 │
 ├ middlewares
 │   └ error-handling.ts
 │
 ├ routes
 │   ├ orders-routes.ts
 │   ├ products-routes.ts
 │   ├ tables-routes.ts
 │   └ tables-sessions-routes.ts
 │
 ├ utils
 │   └ AppError.ts
 │
 └ server.ts
```

A estrutura segue uma separação por responsabilidades:

* **controllers** → lógica de negócio da aplicação
* **routes** → definição das rotas da API
* **middlewares** → tratamento de erros e interceptação de requisições
* **database** → configuração do banco de dados, migrations e seeds
* **utils** → classes utilitárias usadas pela aplicação

---

# Banco de dados

A aplicação utiliza **SQLite** com **Knex.js** como query builder.

O projeto possui:

* **Migrations** para criação das tabelas
* **Seeds** para inserção de dados iniciais

Isso permite versionar a estrutura do banco de dados e facilitar a inicialização do projeto.

---

# Como executar o projeto

### Clonar o repositório

```id="0wo43v"
git clone <repo-url>
```

### Entrar na pasta do projeto

```id="j2njvd"
cd restaurant-api
```

### Instalar dependências

```id="k8t5h6"
npm install
```

### Executar as migrations

```id="j1f4q0"
npm run knex migrate:latest
```

### Executar seeds (dados iniciais)

```id="oq45fc"
npm run knex seed:run
```

### Iniciar o servidor

```id="o5y13x"
npm run dev
```

A API estará disponível em:

```id="0n7xph"
http://localhost:3333
```

---

# Scripts disponíveis

```id="95v6c6"
npm run dev
```

Inicia o servidor em modo desenvolvimento utilizando **tsx**.

```id="8jwyog"
npm run knex
```

Permite executar comandos do **Knex CLI**.

Exemplos:

```id="l1h8yh"
npm run knex migrate:latest
npm run knex seed:run
```

---

# Exemplo de request

Criar um pedido:

```
POST /orders
```

Body da requisição:

```json id="5o33l7"
{
  "table_session_id": 1,
  "product_id": 2,
  "quantity": 1
}
```

---

# Objetivo do projeto

Este projeto foi desenvolvido com fins educacionais para praticar conceitos importantes de desenvolvimento backend:

* construção de APIs REST
* organização de arquitetura de projeto
* manipulação de banco de dados com migrations
* validação de dados
* tratamento centralizado de erros
* separação de responsabilidades no código
