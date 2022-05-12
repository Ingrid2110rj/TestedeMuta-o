# TestedeMutação

Para executar a cobertura de código e teste de mutação citados nesse texto, primeiramente clone [esse repositório](https://github.com/PauloGoncalvesBH/teste-de-mutacao), executando:

```sh
git clone https://github.com/PauloGoncalvesBH/teste-de-mutacao.git
```

Instale as dependências com o comando `npm install`.

<h3 align="center">Testes</h3>

O teste foi implementado utilizando [jest](https://www.npmjs.com/package/jest). Para rodar os testes execute:

```sh
npm test
``` 

<h3 align="center">Cobertura de código</h3>

Para rodar a cobertura de código, execute:

```sh
npm run test:coverage
``` 

<h3 align="center">Teste de mutação</h3>

O teste de mutação é executado com a biblioteca [stryker](https://www.npmjs.com/package/@stryker-mutator/core) e com o runner do [stryker para jest](https://www.npmjs.com/package/@stryker-mutator/jest-runner). Para rodar o teste de mutação execute:

```sh
npm run test:mutation
```

#### Desafio

O que acha de aumentar o score do teste de mutação de _60%_ para _100%_?

Crie novo teste no arquivo [cnh.spec.js](/__tests__/cnh.spec.js) que mate 👿 as 2 mutações que estão sobrevivendo e mantenha a cobertura de código em _100%_.

---


