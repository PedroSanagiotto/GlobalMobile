# GlobalMobile
"Repositório dedicado ao avanço da Global Solution na área da saúde, focado no desenvolvimento mobile. Explore o código-fonte, documentação e recursos essenciais para impulsionar inovações significativas no campo da saúde, promovendo soluções globais e acessíveis por meio de aplicativos móveis."



# Baze

# Global Solution


## Endpoints

- Usuario

    - [Efetuar login](#login)
    - [Realizar Cadastro](#cadastrar)
  

- Bicicleta

    - [Listar](#listar_bicicleta)
    - [Cadastrar](#cadastrar_bicicleta)


- Desafio

    - [Listar  ](#listar_desafio)


### Descrição dos Endpoints

## Usuario

### Login

`GET` http://localhost:8080/api/usuarios/login

```js
{
    login: "matlencar",
    senha: "ola"
}
```
## Respostas que podem aparecer no GET :

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Bad request|
| `404` | Registro pesquisado não encontrado (Not found).|
| `500` | Internal server error|
---
### Cadastrar
    
`POST` http://localhost:8080/api/usuarios

|    Campo     | Tipo | Obrigatorio | Descrição
|--------------|------|:-----------:|----------|
|     Nome     |String|     Sim     |Campo para preenchimento de nome do usuario
|     Email    |String|     Sim     |Campo obrigatorio para que o usuario possa se cadastrar
|     Login    |String|     Sim     |Campo obrigatoio para determinar nome do usuario na plataforma do APP 
|     Senha    |String|     Sim     |Campo obrigatorio para que o usuario tenha acesso a sua conta no APP
|     Idade    | int  |     Sim     |Campo obrigatorio para que o usuario tenha acesso a sua conta no APP
|      Rg      |String|     Sim     |É obrigatorio que o usuario informe em seu cadastro 
|     CPF      |String|     Sim     |É obrigatorio que o usuario informe em seu cadastro 
|     Genero   |String|     Sim     |Campo para inserir genero


```js
{
    "nome": "Julio",
    "email": "joao@email.com.br",
    "login": "joaozim",
    "senha": "ola",
    "idade": 18,
    "rg": "123255123",
    "cpf": "99955577712",
    "genero": "Masculino"
}
```
## Respostas que podem aparecer no POST :

| Código | Descrição |
|---|---|
| `201` | criado com sucesso (success)|
| `400` | Bad request|
| `401` | Dados de acesso inválidos|
| `404` | Registro pesquisado não encontrado (Not found)|
| `500` | Internal server error|
---


## Bicicleta

### Listar_Bicicleta

`GET` http://localhost:8080/api/bicicletas

```js
{
    id:1
    aro: "15",
    quadro: 12,
    peso: "M",
    cor: "Vermelha",
    tipo: "Bicicleta mountain bike",
    marcha: 6
}
```
## Respostas que podem aparecer no GET :

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Bad request|
| `404` | Registro pesquisado não encontrado (Not found).|
| `500` | Internal server error|
---
### Cadastrar_Bicicleta

`POST` /localhost/api/bicicletas

|    Campo     | Tipo | Obrigatorio | Descrição
|--------------|------|:-----------:|----------|
|     Aro      |String|     Sim     |Campo para preenchiment para informçoes da bicicleta
|   Quadro     |String|     Sim     |Campo para preenchimento das descrição da bicicleta
|     Peso     |String|     Sim     |Campo para preenchiment para informçoes da bicicleta
|   Altura     |String|     Sim     |Campo para preenchimento das descrição da bicicleta
|     Cor      |String|     Sim     |Campo para preenchiment para informçoes da bicicleta
|   Tipo       |String|     Sim     |Campo para preenchimento das descrição da bicicleta
|   Marcha     |String|     Sim     |Campo para preenchimento das descrição da bicicleta

```js
{
    "aro": "15",
    "quadro": 12,
    "peso": "M",
    "cor": "Vermelha",
    "tipo": "Bicicleta mountain bike",
    "marcha": 6
}

```
## Respostas que podem aparecer no POST :

| Código | Descrição |
|---|---|
| `201` | criado com sucesso (success)|
| `400` | Bad request|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found)|
| `500` | Internal server error|
---

### Listar_Desafio
`GET` /localhost/api/desafios

```Js
{
    "nome": "Corrida de 6km",
    "descricao": "Objetivo e realizar uma pedalada de 8km durante a semana",
    "tempo": "10:00 minutos",
    "recompensa": "Vupom da decathlon"
}
```

## Respostas que podem aparecer no GET :

| Código | Descrição |
|---|---|
| `201` | criado com sucesso (success)|
| `400` | Bad request|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found)|
| `500` | Internal server error|
---

### `Integrantes`

```js
        André Massao Nakamura RM93046

        Andrea Madureira RM95489

        Erick de Luca Pereira RM94554

        Matheus Alencar Silva RM94642

        Pedro Henrique Sanagiotto RM93182

```



    