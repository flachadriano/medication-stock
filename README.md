# Projeto para controle de estoque de medicamentos

Índice
- [Projeto para controle de estoque de medicamentos](#projeto-para-controle-de-estoque-de-medicamentos)
  - [Como proceder](#como-proceder)
  - [Casos de uso](#casos-de-uso)
    - [Requisito 1 - Tela inicial](#requisito-1---tela-inicial)
    - [Requisito 2 - Botões da tela inicial](#requisito-2---bot%c3%b5es-da-tela-inicial)
    - [Requisito 3 - Cadastrar medicamento](#requisito-3---cadastrar-medicamento)
    - [Requisito 4 - Informar estoque](#requisito-4---informar-estoque)
    - [Requisito 5 - Calcular média](#requisito-5---calcular-m%c3%a9dia)
  - [Requisitos não funcionais](#requisitos-n%c3%a3o-funcionais)

## Como proceder

Passo 1 - Crie um fork deste projeto

Passo 2 - Implemente os Casos de uso e os requisitos não funcionais

Passo 3 - Criar um pull request com a proposta de solução

## Casos de uso

### Requisito 1 - Tela inicial
Pré-condições: Nenhuma

Descrição:

    Como usuário do sistema, gostaria de visualizar uma listagem com pelo menos 5 medicamentos previamente cadastrados ordernados alfabeticamente ao acessar a tela inicial.
    • Deve permitir filtrar os medicamentos pelo nome;
    • Deve permitir ordenar por outra infomação;
    • Deve permitir visualizar todos o medicamento;
    • Deve permitir realizar as ações sobre os medicamentos selecionados (Ver requisito 2).

### Requisito 2 - Botões da tela inicial
Pré-condições: Requisito 1

Descrição:

    Como usuário do sistema, gostaria de adicionar novos medicamentos e informar as movimentações deles.
    • Deve permitir adicionar um novo medicamento através de um formulário (Ver requisito 3);
    • Deve permitir informar movimentações e editar o medicamento em um formulário (Ver requisito 4).

### Requisito 3 - Cadastrar medicamento
Pré-condições: Requisito 2

Descrição:

    Como usuário do sistema, gostaria que o formulário de novo medicamento solicite os seguintes campos:
        - nome do medicamento;
        - dosagem;
        - unidade de medida;
        - quantidade em inicial de estoque;
    • Deve permitir apresentar um formulário com os campos solicitados;
    • Deve validar a obrigatoriedade de preechimento do campo de nome do medicamento;
    • Deve permitir salvar o novo medicamento;
    • Deve permitir cancelar o cadastro do novo medicamento;
    • Deve permitir apresentar o medicamento salvo na listagem ao salvar;
    • Deve voltar para a tela de listagem após salvar.

### Requisito 4 - Informar estoque
Pré-condições: Requisito 2

Descrição:

    Como usuário do sistema, gostaria que o formulário para informar movimentações apresente um formulário com os seguintes campos:
      - Quantidade do primeiro trimestre; 
      - Valor total do primeiro trimestre; 
      - Quantidade do segundo trimestre;
      - Valor total do segundo trimestre;
      - Quantidade do terceiro trimestre;
      - Valor total do terceiro trimestre;
      - Quantidade do quarto trimestre;
      - Valor total do quarto trimestre;
    • Deve permitir salvar a movimentações informadas;
    • Deve atualizar as informações na listagem;
    • Deve voltar para a tela de listagem após salvar.

### Requisito 5 - Calcular média
Pré-condições: Requisito 4

Descrição:

    Como usuário do sistema, gostaria que quando um medicamento tiver os dados de algum dos trimestres preenchido, realize o cálculo do valor de aquisição médio por unidade do medicamento
    • Deve calcular o valor de aquisição médio;
    • Deve apresentar na listagem uma coluna com o valor de aquisição médio.

## Requisitos não funcionais

- O sistema deve estar preparado para internacionalização.
- O sistema deve ter suporte aos idiomas Português e Inglês.
- O sistema deve ter um componente para a criação de formulários.
- O sistema deve ser desenvolvido utilizando um destes frameworks: AngularJS, Angular, React, VueJS ou VanillaJS.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
