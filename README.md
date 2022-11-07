# Front-end Challenge 🏅 2022 - Dictionary

>  This is a challenge by [Coodesh](https://coodesh.com/)
## Descrição

Esse foi um projeto desenvolvido para um processo seletivo na Coodesh e consistiu na criação de um aplicativo para listar palavras em inglês, utilizando como base a API [Free Dictionary API](https://dictionaryapi.dev/). O projeto tem como objetivo exibir termos em inglês e gerenciar as palavras visualizadas, conforme indicado nos casos de uso que estão logo abaixo.

### Requisitos obrigatórios:

**Obrigatório 1** - Você deverá atender aos seguintes casos de uso:

- Como usuário, devo ser capaz de visualizar uma lista de palavras com rolagem infinita
- Como usuário, devo ser capaz de visualizar uma palavra, significados e a fonética
- Como usuário, devo ser capaz de salvar a palavra como favorito
- Como usuário, devo ser capaz de remover a palavra como favorito
- Como usuário, devo ser capaz de visitar uma lista com as palavras que já vi anteriormente

**Obrigatório 2** - Salvar em cache o resultado das requisições ao Free Dictionary API, para agilizar a resposta em caso de buscas com parâmetros repetidos.

**Obrigatório 3** - Seguir o wireframe para a página de listagem dos dados. Pode-se alterar a posição dos itens, mantendo as funcionalidades solicitadas.

<div align="center"><img src="./img/wireframe.png" width="50%" /></div>

  
## Como instalar o projeto:

Clone o repositório.

```bash
$ git clone https://github.com/lemoscaio/desafio-tecnico-peerdustry.git
```

Install the dependencies.

```bash
$ cd desafio-tecnico-peerdustry && npm install
```

## Como usar

Primeiramente, crie o arquivo `.env` baseado no `.env.example`. Esse arquivo contém o endereço da Free Dictionary API e o endereço correspondente para o servidor do JSON-Server.

Abra um terminal para subir o servidor do JSON-Server:

```bash
$ npm run dev:json
```

Após isso, suba a aplicação front-end:

```bash
$ npm run dev
```


## Apresentação do projeto

https://www.loom.com/embed/1b62274944384dd9a875dfa0dacda45c